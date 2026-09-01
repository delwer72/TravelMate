// src/scripts/setCredentials.ts
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const client = new MongoClient(process.env.MONGODB_URI!);

async function main() {
  await client.connect();
  const db = client.db('travelmate_db');
  
  const adminPassword = await bcrypt.hash('Admin123!', 10);
  const userPassword = await bcrypt.hash('User123!', 10);

  // 1. Admin account
  await db.collection('users').updateOne(
    { email: 'admin@travelmate.com' },
    {
      $set: {
        name: 'Admin User',
        email: 'admin@travelmate.com',
        password: adminPassword,
        role: 'admin',
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );

  // 2. Standard user account
  await db.collection('users').updateOne(
    { email: 'user@travelmate.com' },
    {
      $set: {
        name: 'Taylor Swift',
        email: 'user@travelmate.com',
        password: userPassword,
        role: 'user',
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );

  console.log('✅ Updated test accounts:');
  console.log(' - Admin: admin@travelmate.com / Admin123!');
  console.log(' - User:  user@travelmate.com / User123!');

  await client.close();
}

main().catch(console.error);
