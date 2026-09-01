/**
 * seed-users.ts
 * Run once to create demo admin and user accounts in MongoDB.
 *
 * Usage (from travelmate-backend/):
 *   npx ts-node src/scripts/seed-users.ts
 */

import 'dotenv/config';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME   = process.env.DB_NAME || 'travelmate';

const DEMO_USERS = [
  {
    name: 'Admin User',
    email: 'admin@travelmate.com',
    password: 'Admin123!',
    role: 'admin',
  },
  {
    name: 'Taylor Swift',
    email: 'user@travelmate.com',
    password: 'User1234!',
    role: 'user',
  },
  {
    name: 'Guest Traveler',
    email: 'guest@travelmate.com',
    password: 'Guest123!',
    role: 'guest',
  },
];

async function seed() {
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    const db = client.db(DB_NAME);
    const users = db.collection('users');

    for (const u of DEMO_USERS) {
      const existing = await users.findOne({ email: u.email });
      if (existing) {
        console.log(`⏭  ${u.email} already exists — skipping`);
        continue;
      }
      const hashed = await bcrypt.hash(u.password, 10);
      await users.insertOne({
        name: u.name,
        email: u.email,
        password: hashed,
        role: u.role,
        createdAt: new Date(),
      });
      console.log(`✅ Created ${u.role}: ${u.email} / ${u.password}`);
    }

    console.log('\n🎉 Demo users ready!');
    console.log('   admin@travelmate.com  /  Admin123!');
    console.log('   user@travelmate.com   /  User1234!');
    console.log('   guest@travelmate.com  /  Guest123!');
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
