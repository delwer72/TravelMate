// src/controllers/bookingController.ts
import { createBooking, getBookingsByUser, getAllBookings, getBookingById, updateBookingStatus, } from "../models/Booking.js";
import { usersCollection } from "../models/User.js";
export const createNewBooking = async (req, res) => {
    try {
        const { packageId, packageTitle, packageCoverImage, destination, travelerName, travelerEmail, travelerPhone, guestsCount, startDate, totalPrice, specialRequests, } = req.body;
        const user = req.user;
        let userId = user?._id ? new ObjectId(user._id) : undefined;
        // If userId not attached via token, try looking up by email
        if (!userId && travelerEmail) {
            const cleanEmail = travelerEmail.trim().toLowerCase();
            const existingUser = await usersCollection().findOne({ email: cleanEmail });
            if (existingUser?._id) {
                userId = existingUser._id;
            }
        }
        if (!packageTitle || !travelerName || !travelerEmail || !startDate || !totalPrice) {
            res.status(400).json({ success: false, message: 'Missing required booking fields' });
            return;
        }
        const booking = await createBooking({
            userId,
            packageId: ObjectId.isValid(packageId) ? new ObjectId(packageId) : new ObjectId(),
            packageTitle,
            packageCoverImage: packageCoverImage || 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
            destination: destination || 'Global Destination',
            travelerName,
            travelerEmail: travelerEmail.trim().toLowerCase(),
            travelerPhone: travelerPhone || '',
            guestsCount: Number(guestsCount) || 1,
            startDate,
            totalPrice: Number(totalPrice),
            status: 'confirmed',
            paymentStatus: 'paid',
            specialRequests: specialRequests || '',
        });
        res.status(201).json({ success: true, data: booking });
    }
    catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ success: false, message: 'Failed to create booking' });
    }
};
export const getUserBookings = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return;
        }
        const bookings = await getBookingsByUser(user._id.toString(), user.email);
        res.json({ success: true, data: bookings });
    }
    catch (error) {
        console.error('Error fetching user bookings:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
    }
};
export const getAdminBookings = async (req, res) => {
    try {
        const { status, paymentStatus, search, page, limit } = req.query;
        const result = await getAllBookings({
            status: status,
            paymentStatus: paymentStatus,
            search: search,
            page: page ? Number(page) : 1,
            limit: limit ? Number(limit) : 50,
        });
        res.json({ success: true, data: result.bookings, total: result.total });
    }
    catch (error) {
        console.error('Error fetching all bookings:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
    }
};
export const updateStatus = async (req, res) => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const { status, paymentStatus } = req.body;
        const user = req.user;
        if (!user) {
            res.status(401).json({ success: false, message: 'Unauthorized' });
            return;
        }
        const booking = await getBookingById(id);
        if (!booking) {
            res.status(404).json({ success: false, message: 'Booking not found' });
            return;
        }
        // If regular user, verify ownership and ensure they can only cancel
        if (user.role === 'user') {
            const isOwner = (booking.userId && booking.userId.toString() === user._id.toString()) ||
                (booking.travelerEmail && booking.travelerEmail.toLowerCase() === user.email?.toLowerCase());
            if (!isOwner) {
                res.status(403).json({
                    success: false,
                    message: 'Forbidden: You can only manage your own bookings',
                });
                return;
            }
            if (status !== 'cancelled') {
                res.status(400).json({
                    success: false,
                    message: 'Travelers can only cancel bookings',
                });
                return;
            }
        }
        // When a booking is cancelled, automatically update paymentStatus to 'refunded' if not explicitly provided
        const newPaymentStatus = paymentStatus || (status === 'cancelled' ? 'refunded' : undefined);
        const updated = await updateBookingStatus(id, status, newPaymentStatus);
        res.json({ success: true, data: updated });
    }
    catch (error) {
        console.error('Error updating booking status:', error);
        res.status(500).json({ success: false, message: 'Failed to update booking status' });
    }
};
