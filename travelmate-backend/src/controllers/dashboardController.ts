// src/controllers/dashboardController.ts
import { Request, Response } from 'express';
import { bookingsCollection } from '../models/Booking';
import { packagesCollection } from '../models/Package';
import { usersCollection } from '../models/User';
import { ObjectId } from 'mongodb';

export const getAdminDashboardStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const totalUsers = await usersCollection().countDocuments();
    const totalPackages = await packagesCollection().countDocuments();
    const totalBookings = await bookingsCollection().countDocuments();

    // Real total revenue from paid bookings
    const revenueAgg = await bookingsCollection()
      .aggregate([
        { $match: { paymentStatus: 'paid' } },
        { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
      ])
      .toArray();
    const totalRevenue = revenueAgg[0]?.totalRevenue || 0;

    // Real monthly revenue grouped by month from DB
    const monthlyAgg = await bookingsCollection()
      .aggregate([
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m', date: { $toDate: '$createdAt' } } },
            revenue: { $sum: '$totalPrice' },
            bookings: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
        { $limit: 12 },
        {
          $project: {
            _id: 0,
            month: '$_id',
            revenue: 1,
            bookings: 1,
          },
        },
      ])
      .toArray();
    const monthlyRevenue = monthlyAgg as { month: string; revenue: number; bookings: number }[];

    // Real status breakdown
    const pendingBookings = await bookingsCollection().countDocuments({ status: 'pending' });
    const confirmedBookings = await bookingsCollection().countDocuments({ status: 'confirmed' });
    const completedBookings = await bookingsCollection().countDocuments({ status: 'completed' });
    const cancelledBookings = await bookingsCollection().countDocuments({ status: 'cancelled' });

    const statusBreakdown = [
      { name: 'Confirmed', value: confirmedBookings, color: '#10B981' },
      { name: 'Pending', value: pendingBookings, color: '#F59E0B' },
      { name: 'Completed', value: completedBookings, color: '#6366F1' },
      { name: 'Cancelled', value: cancelledBookings, color: '#EF4444' },
    ];

    // Most recent 6 bookings
    const recentBookings = await bookingsCollection()
      .find()
      .sort({ createdAt: -1 })
      .limit(6)
      .toArray();

    res.json({
      success: true,
      stats: {
        totalRevenue,
        totalBookings,
        totalUsers,
        totalPackages,
        monthlyRevenue,
        statusBreakdown,
        recentBookings,
      },
    });
  } catch (error) {
    console.error('Admin dashboard stats error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch dashboard stats' });
  }
};

export const getUserDashboardStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    const userId = user?._id ? new ObjectId(user._id) : null;
    const userEmail = user?.email?.trim().toLowerCase();

    let userBookings: any[] = [];
    const orConditions: any[] = [];
    if (userId) {
      orConditions.push({ userId });
    }
    if (userEmail) {
      orConditions.push({ travelerEmail: { $regex: `^${userEmail}$`, $options: 'i' } });
    }

    if (orConditions.length > 0) {
      userBookings = await bookingsCollection()
        .find({ $or: orConditions })
        .sort({ createdAt: -1 })
        .toArray();
    }

    const totalTrips = userBookings.length;
    const activeTrips = userBookings.filter((b) => b.status === 'confirmed').length;
    const totalSpent = userBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);

    res.json({
      success: true,
      stats: {
        totalTrips,
        activeTrips,
        savedPlaces: user?.savedPackages?.length || 0,
        savedPackageIds: user?.savedPackages || [],
        totalSpent,
        rewardPoints: Math.floor(totalSpent * 0.1),
        recentBookings: userBookings,
      },
    });
  } catch (error) {
    console.error('User dashboard stats error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch user stats' });
  }
};
