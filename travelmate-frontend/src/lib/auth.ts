import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");
const db = client.db(process.env.DB_NAME || "travelmate_db");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, { client }),
  user: {
    additionalFields: {
      plan: {
        type: "string",
        defaultValue: "user_free",
        input: true,
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          // If explicitly set to guest_free plan, assign guest; otherwise default to user
          const role =
            user.plan === "guest_free"
              ? "guest"
              : (user as any).role || "user";

          return {
            data: {
              ...user,
              role,
            },
          };
        },
        after: async (user) => {
          // Sync to the 'users' collection used by the Express backend
          try {
            const cleanEmail = user.email?.trim().toLowerCase();
            if (cleanEmail) {
              await db.collection("users").updateOne(
                { email: cleanEmail },
                {
                  $setOnInsert: {
                    name: user.name || "Traveler",
                    email: cleanEmail,
                    role: (user as any).role || "user",
                    profileImage: user.image || undefined,
                    savedPackages: [],
                    createdAt: new Date(),
                  },
                },
                { upsert: true }
              );
            }
          } catch (syncErr) {
            console.error("Failed to sync new user to users collection:", syncErr);
          }
        },
      },
    },
  },
  plugins: [admin()],
});