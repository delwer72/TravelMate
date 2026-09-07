import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import { auth } from "@/lib/auth";
import { MongoClient } from "mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "3a75d6ae5181729f26c18cd7f99cc4efec02d244d74d99574aefdf1a8879aede764ed75943f73e6490566477831066ce";

let mongoClient: MongoClient | null = null;
async function getDb() {
  if (!mongoClient) {
    mongoClient = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");
    await mongoClient.connect();
  }
  return mongoClient.db(process.env.DB_NAME || "travelmate_db");
}

async function handleSync(req: NextRequest) {
  try {
    const reqHeaders = await headers();
    const session = await auth.api.getSession({
      headers: reqHeaders,
    });

    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, message: "No active Better Auth session found." },
        { status: 401 }
      );
    }

    const { user } = session;
    // Upgrade guest to user for authenticated accounts (admin stays admin)
    let role = (user as any).role;
    if (!role || role === "guest") {
      role = "user";
    }
    const cleanEmail = user.email.trim().toLowerCase();

    // Ensure user is synced in the MongoDB 'users' & 'user' collections
    try {
      const db = await getDb();
      await db.collection("users").updateOne(
        { email: cleanEmail },
        {
          $set: {
            name: user.name || "Traveler",
            email: cleanEmail,
            role,
            profileImage: user.image || undefined,
          },
          $setOnInsert: {
            savedPackages: [],
            createdAt: new Date(),
          },
        },
        { upsert: true }
      );

      await db.collection("user").updateOne(
        { email: cleanEmail },
        {
          $set: {
            role,
          },
        }
      );
    } catch (dbErr) {
      console.error("Error syncing to users collection:", dbErr);
    }

    // Generate JWT for Express backend & Next.js middleware
    const token = jwt.sign(
      {
        id: user.id,
        role,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const safeUser = {
      id: user.id,
      name: user.name || "Traveler",
      email: cleanEmail,
      role,
      profileImage: user.image || undefined,
    };

    const response = NextResponse.json({
      success: true,
      token,
      user: safeUser,
    });

    // Set cookie so middleware and API client can immediately authenticate
    response.cookies.set({
      name: "tm_auth_token",
      value: token,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
      httpOnly: false, // Accessible to client-side JS & middleware
    });

    return response;
  } catch (err: any) {
    console.error("Session sync error:", err);
    return NextResponse.json(
      { success: false, message: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return handleSync(req);
}

export async function POST(req: NextRequest) {
  return handleSync(req);
}
