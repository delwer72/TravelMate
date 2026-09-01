// src/scripts/testBooking.ts
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function main() {
  // 1. Login as Admin
  const loginRes = await fetch('http://localhost:8000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'admin@travelmate.com',
      password: 'Admin123!',
    }),
  });
  const loginJson = await loginRes.json();
  const token = loginJson.token;
  console.log('Admin login status:', loginRes.status, token ? '✅ Logged in successfully' : '❌ Failed');

  // 2. Fetch Admin Dashboard with token
  const adminRes = await fetch('http://localhost:8000/api/dashboard/admin', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const adminJson = await adminRes.json();
  console.log('Admin Dashboard Stats:');
  console.log(' - Total Bookings:', adminJson.stats?.totalBookings);
  console.log(' - Total Revenue: $' + adminJson.stats?.totalRevenue);
  console.log(' - Recent Booking Title:', adminJson.stats?.recentBookings?.[0]?.packageTitle);
  console.log(' - Recent Booking Traveler:', adminJson.stats?.recentBookings?.[0]?.travelerName);

  // 3. Fetch Admin Bookings List
  const listRes = await fetch('http://localhost:8000/api/bookings', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const listJson = await listRes.json();
  console.log('Admin Bookings List: count =', listJson.data?.length);

  // 4. Test User Login and personal bookings
  const userLoginRes = await fetch('http://localhost:8000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'user@travelmate.com',
      password: 'User123!',
    }),
  });
  const userLoginJson = await userLoginRes.json();
  const userToken = userLoginJson.token;
  
  // Submit a booking for this user
  const bookRes = await fetch('http://localhost:8000/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      packageId: '6a945b35980995a1ac92f980',
      packageTitle: 'Swiss Alps Adventure & Glacier Express',
      packageCoverImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99',
      destination: 'Interlaken & Zermatt',
      travelerName: 'Taylor Swift',
      travelerEmail: 'user@travelmate.com',
      travelerPhone: '+1 (555) 349-8291',
      guestsCount: 2,
      startDate: '2026-10-10',
      totalPrice: 3300,
      specialRequests: 'Ocean or mountain view',
    }),
  });
  const bookJson = await bookRes.json();
  console.log('User Booking creation:', bookRes.status, bookJson.success ? '✅ Created' : '❌ Failed');

  // Fetch User's personal bookings
  const userBookingsRes = await fetch('http://localhost:8000/api/bookings/my', {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  const userBookingsJson = await userBookingsRes.json();
  console.log('User personal bookings count =', userBookingsJson.data?.length);
  console.log('User latest booking title =', userBookingsJson.data?.[0]?.packageTitle);
}

main().catch(console.error);
