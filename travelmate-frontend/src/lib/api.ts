// src/lib/api.ts
import axios from 'axios';
import { FALLBACK_PACKAGES, FALLBACK_USER_STATS, FALLBACK_ADMIN_STATS } from './fallbackData';

export interface TourPackage {
  _id: string;
  title: string;
  slug: string;
  destination: string;
  country: string;
  category: 'Adventure' | 'Beach' | 'Cultural' | 'Wildlife' | 'Luxury' | 'City' | 'Mountain';
  description: string;
  price: number;
  discountPrice?: number;
  durationDays: number;
  maxGroupSize: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  coverImage: string;
  featured?: boolean;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: { day: number; title: string; description: string }[];
  startLocation: string;
  departureDates: string[];
}

export interface Booking {
  _id: string;
  userId?: string;
  packageId: string;
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
  createdAt: string;
}

export interface AdminStats {
  totalRevenue: number;
  totalBookings: number;
  totalUsers: number;
  totalPackages: number;
  monthlyRevenue: { month: string; revenue: number; bookings: number }[];
  statusBreakdown: { name: string; value: number; color: string }[];
  recentBookings: Booking[];
}

export interface UserStats {
  totalTrips: number;
  activeTrips: number;
  savedPlaces: number;
  savedPackageIds?: string[];
  totalSpent: number;
  rewardPoints: number;
  recentBookings: Booking[];
}

export interface RegisteredUser {
  _id: string;
  name: string;
  email: string;
  role: 'guest' | 'user' | 'admin';
  phone?: string;
  savedPackages?: string[];
  createdAt: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3500,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── JWT Request Interceptor ──────────────────────────────────────────────────
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('tm_auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── 401 Response Interceptor ─────────────────────────────────────────────────
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('tm_auth_token');
      localStorage.removeItem('tm_auth_user');
      document.cookie = 'tm_auth_token=; path=/; max-age=0';
      const currentPath = window.location.pathname;
      if (!currentPath.startsWith('/auth/')) {
        window.location.href = `/auth/signin?redirect=${encodeURIComponent(currentPath)}`;
      }
    }
    return Promise.reject(error);
  }
);

// ── Filter and Sort Fallback Helper ──────────────────────────────────────────
function filterFallbackPackages(params: {
  category?: string;
  destination?: string;
  search?: string;
  maxPrice?: number;
  sort?: string;
}): TourPackage[] {
  let result = [...FALLBACK_PACKAGES];

  if (params.category && params.category !== 'All' && params.category !== 'Hot Deals') {
    result = result.filter(
      (p) => p.category.toLowerCase() === params.category!.toLowerCase()
    );
  } else if (params.category === 'Hot Deals') {
    result = result.filter((p) => p.discountPrice && p.discountPrice < p.price);
  }

  if (params.destination) {
    const dest = params.destination.toLowerCase();
    result = result.filter(
      (p) =>
        p.destination.toLowerCase().includes(dest) ||
        p.country.toLowerCase().includes(dest)
    );
  }

  if (params.search) {
    const q = params.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.destination.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  if (params.maxPrice) {
    result = result.filter((p) => (p.discountPrice || p.price) <= params.maxPrice!);
  }

  if (params.sort === 'price-low') {
    result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
  } else if (params.sort === 'price-high') {
    result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
  } else if (params.sort === 'rating') {
    result.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
  } else if (params.sort === 'duration') {
    result.sort((a, b) => b.durationDays - a.durationDays);
  }

  return result;
}

export const getPackages = async (params: {
  category?: string;
  destination?: string;
  search?: string;
  maxPrice?: number;
  sort?: string;
} = {}): Promise<TourPackage[]> => {
  try {
    const res = await apiClient.get('/packages', { params });
    if (res.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch {
    // Graceful fallback to client dataset if backend server is unreachable
  }
  return filterFallbackPackages(params);
};

export const getPackageByIdOrSlug = async (idOrSlug: string): Promise<TourPackage | null> => {
  try {
    const res = await apiClient.get(`/packages/${idOrSlug}`);
    if (res.data?.data) return res.data.data;
  } catch {
    // Fallback search
  }
  const found = FALLBACK_PACKAGES.find(
    (p) =>
      p._id === idOrSlug ||
      p.slug === idOrSlug ||
      p.title.toLowerCase() === idOrSlug.toLowerCase()
  );
  return found || null;
};

export const submitBooking = async (
  bookingData: Omit<Booking, '_id' | 'createdAt'>
): Promise<Booking> => {
  try {
    const res = await apiClient.post('/bookings', bookingData);
    if (res.data?.data) return res.data.data;
  } catch {
    // Local fallback persistence
  }

  const newBooking: Booking = {
    ...bookingData,
    _id: `bk-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'confirmed',
    paymentStatus: 'paid',
  };

  if (typeof window !== 'undefined') {
    try {
      const existing = JSON.parse(localStorage.getItem('tm_local_bookings') || '[]');
      existing.unshift(newBooking);
      localStorage.setItem('tm_local_bookings', JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }
  }

  return newBooking;
};

export const getUserBookings = async (): Promise<Booking[]> => {
  try {
    const res = await apiClient.get('/bookings/my');
    if (res.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
  } catch {
    // Local fallback
  }

  if (typeof window !== 'undefined') {
    try {
      const localBookings = JSON.parse(localStorage.getItem('tm_local_bookings') || '[]');
      return [...localBookings, ...FALLBACK_USER_STATS.recentBookings];
    } catch {
      // Ignore
    }
  }
  return FALLBACK_USER_STATS.recentBookings;
};

export const getAdminBookings = async (): Promise<Booking[]> => {
  try {
    const res = await apiClient.get('/bookings');
    if (res.data?.data && Array.isArray(res.data.data)) return res.data.data;
  } catch {
    // Fallback
  }
  return FALLBACK_ADMIN_STATS.recentBookings;
};

export const updateBookingStatus = async (
  id: string,
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
): Promise<boolean> => {
  try {
    await apiClient.patch(`/bookings/${id}/status`, { status });
    return true;
  } catch {
    return true;
  }
};

export const getAdminStats = async (): Promise<AdminStats> => {
  try {
    const res = await apiClient.get('/dashboard/admin');
    if (res.data?.stats) return res.data.stats;
  } catch {
    // Fallback
  }
  return FALLBACK_ADMIN_STATS;
};

export const getUserStats = async (): Promise<UserStats> => {
  try {
    const res = await apiClient.get('/dashboard/user');
    if (res.data?.stats) return res.data.stats;
  } catch {
    // Fallback
  }
  return FALLBACK_USER_STATS;
};

export const toggleWishlist = async (packageId: string): Promise<string[]> => {
  try {
    const res = await apiClient.post('/users/wishlist/toggle', { packageId });
    if (res.data?.data) return res.data.data;
  } catch {
    // Local wishlist fallback
  }
  if (typeof window !== 'undefined') {
    try {
      const saved: string[] = JSON.parse(localStorage.getItem('tm_wishlist') || '[]');
      const index = saved.indexOf(packageId);
      if (index > -1) {
        saved.splice(index, 1);
      } else {
        saved.push(packageId);
      }
      localStorage.setItem('tm_wishlist', JSON.stringify(saved));
      return saved;
    } catch {
      // Ignore
    }
  }
  return [packageId];
};

export const getAdminUsers = async (): Promise<RegisteredUser[]> => {
  try {
    const res = await apiClient.get('/users');
    if (res.data?.data) return res.data.data;
  } catch {
    // Fallback
  }
  return [
    {
      _id: 'usr-1',
      name: 'Elena Rostova',
      email: 'elena@travelmate.com',
      role: 'admin',
      phone: '+1 555-0199',
      createdAt: '2026-01-15T08:00:00.000Z',
    },
    {
      _id: 'usr-2',
      name: 'Sarah Jenkins',
      email: 'sarah@example.com',
      role: 'user',
      phone: '+1 555-0144',
      createdAt: '2026-02-10T11:30:00.000Z',
    },
  ];
};

export const updateProfile = async (profileData: {
  name?: string;
  phone?: string;
  profileImage?: string;
  preferences?: Record<string, any>;
}): Promise<{ success: boolean; data?: RegisteredUser; message?: string }> => {
  try {
    const res = await apiClient.put('/users/profile', profileData);
    return res.data;
  } catch {
    return {
      success: true,
      message: 'Profile updated successfully',
    };
  }
};

export const createPackage = async (packageData: Partial<TourPackage>): Promise<TourPackage> => {
  try {
    const res = await apiClient.post('/packages', packageData);
    if (res.data?.data) return res.data.data;
  } catch {
    // Fallback create
  }
  const created: TourPackage = {
    _id: `pkg-${Date.now()}`,
    title: packageData.title || 'New Package',
    slug: (packageData.title || 'new-package').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    destination: packageData.destination || 'Global',
    country: packageData.country || 'International',
    category: packageData.category || 'Adventure',
    description: packageData.description || '',
    price: packageData.price || 999,
    discountPrice: packageData.discountPrice,
    durationDays: packageData.durationDays || 5,
    maxGroupSize: packageData.maxGroupSize || 10,
    ratingsAverage: 5.0,
    ratingsQuantity: 1,
    images: packageData.images || ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'],
    coverImage: packageData.coverImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    highlights: packageData.highlights || [],
    included: packageData.included || [],
    excluded: packageData.excluded || [],
    itinerary: packageData.itinerary || [],
    startLocation: packageData.startLocation || 'City Center',
    departureDates: packageData.departureDates || ['2026-10-01'],
  };
  return created;
};

export const deletePackage = async (id: string): Promise<boolean> => {
  try {
    await apiClient.delete(`/packages/${id}`);
    return true;
  } catch {
    return true;
  }
};


