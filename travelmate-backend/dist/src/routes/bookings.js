// src/routes/bookings.ts
import { Router } from 'express';
import { createNewBooking, getUserBookings, getAdminBookings, updateStatus, } from '../controllers/bookingController';
import { protect, optionalProtect, authorize } from '../middleware/auth';
const router = Router();
// Create booking (Authenticated user or guest)
router.post('/', optionalProtect, createNewBooking);
// Traveler view: Only authenticated 'user' or 'admin' can view personal bookings
router.get('/my', protect, authorize('user', 'admin'), getUserBookings);
// Booking status update (Admin can update any status; User can cancel their own booking)
router.patch('/:id/status', protect, authorize('user', 'admin'), updateStatus);
// Admin-only management endpoints
router.get('/', protect, authorize('admin'), getAdminBookings);
export default router;
