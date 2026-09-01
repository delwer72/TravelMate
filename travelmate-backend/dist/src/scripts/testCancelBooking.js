// src/scripts/testCancelBooking.ts
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
async function main() {
    // 1. Login as User
    const loginRes = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: 'user@travelmate.com',
            password: 'User123!',
        }),
    });
    const loginJson = await loginRes.json();
    const userToken = loginJson.token;
    console.log('User login status:', loginRes.status, userToken ? '✅ Token' : '❌ No token');
    // 2. Create a test booking to cancel
    const createRes = await fetch('http://localhost:8000/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
            packageId: '6a945b35980995a1ac92f980',
            packageTitle: 'Swiss Alps Glacier Tour',
            destination: 'Interlaken',
            travelerName: 'Taylor Swift',
            travelerEmail: 'user@travelmate.com',
            guestsCount: 1,
            startDate: '2026-11-15',
            totalPrice: 1650,
        }),
    });
    const createJson = await createRes.json();
    const bookingId = createJson.data?._id;
    console.log('Created booking ID:', bookingId, 'Initial status:', createJson.data?.status);
    // 3. Cancel the booking using the User's token
    const cancelRes = await fetch(`http://localhost:8000/api/bookings/${bookingId}/status`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
            status: 'cancelled',
        }),
    });
    const cancelJson = await cancelRes.json();
    console.log('Cancel HTTP status:', cancelRes.status);
    console.log('Cancel Response:', cancelJson);
    // 4. Verify user personal bookings list reflects cancelled status
    const myBookingsRes = await fetch('http://localhost:8000/api/bookings/my', {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    });
    const myBookingsJson = await myBookingsRes.json();
    const targetBooking = myBookingsJson.data?.find((b) => b._id === bookingId);
    console.log('Verified in database:', {
        _id: targetBooking?._id,
        status: targetBooking?.status,
        paymentStatus: targetBooking?.paymentStatus,
    });
    if (targetBooking?.status === 'cancelled') {
        console.log('✅ Booking cancellation tested and working with database persistence!');
    }
    else {
        console.log('❌ Booking was not cancelled in DB');
    }
}
main().catch(console.error);
