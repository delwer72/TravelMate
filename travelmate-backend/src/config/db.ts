// src/config/db.ts

import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config();
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});
dotenv.config({
  path: path.resolve(process.cwd(), "travelmate-backend", ".env"),
});

let client: MongoClient | null = null;
let db: Db | null = null;

export const connectDB = async (): Promise<Db> => {
  try {
    const uri = process.env.MONGODB_URI;
    const dbName = process.env.DB_NAME || "travelmate";

    if (!uri) {
      throw new Error(
        "MONGODB_URI is not defined in environment variables."
      );
    }

    if (!client) {
      client = new MongoClient(uri, {
        serverSelectionTimeoutMS: 10000,
      });
    }

    // Connect only when needed
    if (!db) {
      await client.connect();

      db = client.db(dbName);

      // Enforce unique emails
      await db.collection("users").createIndex(
        { email: 1 },
        { unique: true }
      );

      console.log(`✅ Connected to MongoDB (db: ${dbName})`);
    }

    return db;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);

    // Do NOT use process.exit(1) on Vercel/serverless
    throw error;
  }
};

export const getDb = (): Db => {
  if (!db) {
    throw new Error(
      "Database not initialized. Call connectDB() before getDb()."
    );
  }

  return db;
};

export const closeDB = async (): Promise<void> => {
  if (client) {
    await client.close();
    client = null;
  }

  db = null;
};