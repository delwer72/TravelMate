// src/models/Booking.ts
import { Collection, ObjectId, WithId } from 'mongodb';
import { getDb } from '../config/db';

export interface IBooking {
  _id?: ObjectId;
  userId?: ObjectId;
  packageId: ObjectId;
  packageTitle: string;
  packageCoverImage?: string;
  destination: string;
  travelerName: string;
  travelerEmail: string;
  travelerPhone: string;
  guestsCount: number;
  startDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'unpaid' | 'paid' | 'refunded';
  specialRequests?: string;
  createdAt: Date;
}

export const bookingsCollection = (): Collection<IBooking> =>
  getDb().collection<IBooking>('bookings');

export const createBooking = async (
  data: Omit<IBooking, '_id' | 'createdAt'>
): Promise<WithId<IBooking>> => {
  const doc: IBooking = {
    ...data,
    status: data.status || 'pending',
    paymentStatus: data.paymentStatus || 'paid',
    createdAt: new Date(),
  };
  const result = await bookingsCollection().insertOne(doc);
  return { ...doc, _id: result.insertedId };
};

export const getBookingsByUser = async (
  userId: string,
  userEmail?: string
): Promise<WithId<IBooking>[]> => {
  const orConditions: any[] = [];
  if (ObjectId.isValid(userId)) {
    orConditions.push({ userId: new ObjectId(userId) });
  }
  if (userEmail && userEmail.trim()) {
    const cleanEmail = userEmail.trim().toLowerCase();
    orConditions.push({ travelerEmail: { $regex: `^${cleanEmail}$`, $options: 'i' } });
  }

  if (orConditions.length === 0) return [];

  return bookingsCollection()
    .find({ $or: orConditions })
    .sort({ createdAt: -1 })
    .toArray();
};

export const getAllBookings = async (filters: {
  status?: string;
  paymentStatus?: string;
  search?: string;
  limit?: number;
  page?: number;
} = {}): Promise<{ bookings: WithId<IBooking>[]; total: number }> => {
  const query: any = {};
  if (filters.status && filters.status !== 'All') {
    query.status = filters.status;
  }
  if (filters.paymentStatus) {
    query.paymentStatus = filters.paymentStatus;
  }
  if (filters.search) {
    query.$or = [
      { packageTitle: { $regex: filters.search, $options: 'i' } },
      { travelerName: { $regex: filters.search, $options: 'i' } },
      { travelerEmail: { $regex: filters.search, $options: 'i' } },
      { destination: { $regex: filters.search, $options: 'i' } },
    ];
  }

  const page = Math.max(1, filters.page || 1);
  const limit = Math.min(100, filters.limit || 50);
  const skip = (page - 1) * limit;

  const total = await bookingsCollection().countDocuments(query);
  const bookings = await bookingsCollection()
    .find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  return { bookings, total };
};

export const getBookingById = (id: string): Promise<WithId<IBooking> | null> => {
  if (!ObjectId.isValid(id)) return Promise.resolve(null);
  return bookingsCollection().findOne({ _id: new ObjectId(id) });
};

export const updateBookingStatus = async (
  id: string,
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled',
  paymentStatus?: 'unpaid' | 'paid' | 'refunded'
): Promise<WithId<IBooking> | null> => {
  if (!ObjectId.isValid(id)) return null;
  const updateDoc: any = { status };
  if (paymentStatus) updateDoc.paymentStatus = paymentStatus;

  await bookingsCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: updateDoc }
  );
  return getBookingById(id);
};
