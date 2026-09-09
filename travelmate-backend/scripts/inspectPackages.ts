import dotenv from "dotenv";
dotenv.config();
import { connectDB, getDb } from "../src/config/db.js";

async function run() {
  await connectDB();
  const db = getDb();
  const packages = await db.collection("packages").find({}, { projection: { title: 1, createdAt: 1 } }).sort({ createdAt: -1 }).toArray();
  const realPackages = packages.filter(p => !p.title.match(/Expedition \d+$/));
  const dummyPackages = packages.filter(p => p.title.match(/Expedition \d+$/));
  console.log("TOTAL PACKAGES:", packages.length);
  console.log("REAL PACKAGES COUNT:", realPackages.length);
  console.log("DUMMY EXPEDITION PACKAGES COUNT:", dummyPackages.length);
  console.log("\nREAL PACKAGES LIST:");
  realPackages.forEach((p, idx) => {
    console.log(`${idx + 1}: [${p._id}] "${p.title}"`);
  });
  process.exit(0);
}

run().catch(console.error);
