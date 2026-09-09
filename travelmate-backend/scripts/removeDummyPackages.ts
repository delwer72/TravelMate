import dotenv from "dotenv";
dotenv.config();
import { connectDB, getDb } from "../src/config/db.js";

async function run() {
  await connectDB();
  const db = getDb();

  // Find the dummy expedition packages
  const dummyQuery = { title: { $regex: /Expedition \d+$/ } };
  const countBefore = await db.collection("packages").countDocuments(dummyQuery);
  console.log(`Found ${countBefore} dummy packages to remove.`);

  // Delete only the dummy expedition packages
  const deleteResult = await db.collection("packages").deleteMany(dummyQuery);
  console.log(`Deleted ${deleteResult.deletedCount} dummy packages.`);

  // For the real packages that have undefined createdAt, give them a valid baseline date
  const now = new Date();
  const baselineDate = new Date(Date.now() - 7 * 24 * 3600 * 1000); // 7 days ago
  await db.collection("packages").updateMany(
    { createdAt: { $exists: false } },
    { $set: { createdAt: baselineDate } }
  );

  // List remaining packages
  const remaining = await db.collection("packages").find({}, { projection: { title: 1, createdAt: 1 } }).sort({ createdAt: -1 }).toArray();
  console.log(`\nRemaining ${remaining.length} packages in database:`);
  remaining.forEach((p, idx) => {
    console.log(`${idx + 1}: "${p.title}" (created: ${p.createdAt})`);
  });

  process.exit(0);
}

run().catch(console.error);
