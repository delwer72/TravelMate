// src/scripts/migrate.ts
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const client = new MongoClient(process.env.MONGODB_URI!);

async function main() {
  await client.connect();
  const sourceDb = client.db('travelmate');
  const targetDb = client.db('travelmate_db');

  console.log('--- Unifying data into travelmate_db ---');

  // 1. Packages
  const packages = await sourceDb.collection('packages').find().toArray();
  console.log(`Copying ${packages.length} packages to travelmate_db.packages...`);
  for (const p of packages) {
    await targetDb.collection('packages').replaceOne({ _id: p._id }, p, { upsert: true });
  }

  // 2. Bookings
  const bookings = await sourceDb.collection('bookings').find().toArray();
  console.log(`Copying ${bookings.length} bookings to travelmate_db.bookings...`);
  for (const b of bookings) {
    await targetDb.collection('bookings').replaceOne({ _id: b._id }, b, { upsert: true });
  }

  // 3. Users: Copy all from travelmate.users to travelmate_db.users
  const tmUsers = await sourceDb.collection('users').find().toArray();
  console.log(`Copying ${tmUsers.length} users to travelmate_db.users...`);
  for (const u of tmUsers) {
    await targetDb.collection('users').replaceOne({ email: u.email.toLowerCase() }, u, { upsert: true });
  }

  // 4. Also make sure all users from travelmate_db.user exist in travelmate_db.users
  const betterUsers = await targetDb.collection('user').find().toArray();
  console.log(`Checking ${betterUsers.length} better-auth users...`);
  for (const bu of betterUsers) {
    const email = bu.email.toLowerCase();
    const exists = await targetDb.collection('users').findOne({ email });
    if (!exists) {
      console.log(`Adding ${email} to users collection...`);
      await targetDb.collection('users').insertOne({
        name: bu.name || 'User',
        email,
        password: '',
        role: bu.role || 'user',
        profileImage: bu.image || '',
        createdAt: bu.createdAt || new Date(),
      } as any);
    }
  }

  console.log('✅ Unification complete!');
  await client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
