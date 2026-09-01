"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BookingModal from '@/components/dashboard/BookingModal';
import { useAuth } from '@/lib/auth-context';
import {
  getUserBookings,
  getUserStats,
  getPackages,
  updateBookingStatus,
  toggleWishlist,
  Booking,
  UserStats,
  TourPackage,
} from '@/lib/api';
import {
  Plane,
  Calendar,
  MapPin,
  Heart,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Sparkles,
  Ticket,
  ChevronRight,
  Shield,
  CreditCard,
  User,
  Sliders
} from 'lucide-react';

function UserDashboardContent() {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get('tab') || 'overview';

  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'wishlist' | 'settings'>(
    tabQuery as any || 'overview'
  );
  const [stats, setStats] = useState<UserStats | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBookingForModal, setSelectedBookingForModal] = useState<TourPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Profile form state — pre-filled from real auth
  const [userName, setUserName] = useState(user?.name || '');
  const [userEmail, setUserEmail] = useState(user?.email || '');
  const [userPhone, setUserPhone] = useState('+1 (555) 349-8291');
  const [userPassport, setUserPassport] = useState('US9832104');
  const [profileSaved, setProfileSaved] = useState(false);

  useEffect(() => {
    if (tabQuery && ['overview', 'bookings', 'wishlist', 'settings'].includes(tabQuery)) {
      setActiveTab(tabQuery as any);
    }
  }, [tabQuery]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [statsRes, bookingsRes, packagesRes] = await Promise.all([
        getUserStats(),
        getUserBookings(),
        getPackages(),
      ]);
      setStats(statsRes);
      setBookings(bookingsRes);
      setPackages(packagesRes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push('/auth/signin?redirect=/dashboard/user');
      return;
    }
    if (user.role !== 'user' && user.role !== 'admin') {
      router.push('/dashboard/guest');
      return;
    }
    loadData();
    // Sync profile fields when user data loads
    setUserName(user.name || '');
    setUserEmail(user.email || '');
  }, [user, authLoading]);

  const [cancellingId, setCancellingId] = useState<string | null>(null);

  const handleCancelBooking = async (bookingId: string) => {
    if (!confirm('Are you sure you want to cancel this booking? Refunds may take 3-5 business days.')) return;
    setCancellingId(bookingId);
    try {
      const ok = await updateBookingStatus(bookingId, 'cancelled');
      if (ok) {
        setBookings(prev => prev.map(b => b._id === bookingId ? { ...b, status: 'cancelled' } : b));
        const statsRes = await getUserStats();
        setStats(statsRes);
      } else {
        alert('Failed to cancel booking');
      }
    } catch (err) {
      alert('An error occurred during cancellation.');
    } finally {
      setCancellingId(null);
    }
  };

  const handleToggleWishlist = async (pkgId: string) => {
    try {
      await toggleWishlist(pkgId);
      loadData(); // Refresh the saved packages in stats
    } catch (err) {
      console.error('Failed to toggle wishlist:', err);
    }
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const getStatusBadge = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Clock className="w-3.5 h-3.5" /> Pending Review
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
            <XCircle className="w-3.5 h-3.5" /> Cancelled
          </span>
        );
    }
  };

  // Auth loading spinner
  if (authLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-400 text-sm">
        <svg className="animate-spin w-5 h-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-6 min-h-[calc(100vh-8rem)]">
      <DashboardSidebar />

      <main className="flex-1 min-w-0">
        <DashboardHeader
          title="Traveler Dashboard"
          subtitle="Welcome back, explore upcoming trips, manage reservations, and track travel rewards."
          role="user"
        />

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 gap-2 sm:gap-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Trips' },
            { id: 'bookings', label: 'My Bookings', count: bookings.length },
            { id: 'wishlist', label: 'Wishlist & Saved' },
            { id: 'settings', label: 'Profile & Preferences' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="px-2 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-emerald-500 dark:text-emerald-400">
                  <Plane className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Active Bookings</p>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{stats?.activeTrips ?? 1}</h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ready for departure
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-emerald-500 dark:text-emerald-400">
                  <Calendar className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Trips Taken</p>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{stats?.totalTrips ?? 3}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Across 5 continents</p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-rose-500 dark:text-rose-400">
                  <Heart className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Saved Wishlist</p>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{stats?.savedPlaces ?? 4}</h3>
                <p className="text-xs text-rose-500 dark:text-rose-400 mt-2 flex items-center gap-1">
                  <span>Explore dream bucketlist</span>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-emerald-500 dark:text-emerald-400">
                  <TrendingUp className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Traveler Reward Points</p>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{(stats?.rewardPoints ?? 345).toLocaleString()} pts</h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-medium">Silver Voyager Status</p>
              </div>
            </div>

            {/* Next Upcoming Adventure Spotlight */}
            {bookings.length > 0 && (
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-emerald-200/70 dark:border-slate-800 shadow-xl shadow-emerald-500/5 dark:shadow-2xl overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between relative z-10">
                  <div className="space-y-3 max-w-xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Next Upcoming Trip
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">{bookings[0].packageTitle}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      <span>{bookings[0].destination}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      <span>Departure: {new Date(bookings[0].startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-200 shadow-sm">
                        Traveler: <span className="font-semibold text-slate-900 dark:text-white">{bookings[0].travelerName}</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-200 shadow-sm">
                        Party: <span className="font-semibold text-slate-900 dark:text-white">{bookings[0].guestsCount} Guests</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <button
                      onClick={() => setActiveTab('bookings')}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-600/25 transition flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 duration-200"
                    >
                      <Ticket className="w-4 h-4" /> View Boarding Pass & Details
                    </button>
                    <Link
                      href="/packages"
                      className="px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition flex items-center justify-center gap-2 shadow-sm"
                    >
                      Browse More Tours
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Recommended Packages Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Curated For You</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Hand-picked destinations matching your traveler profile</p>
                </div>
                <Link href="/packages" className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-1">
                  See All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {packages.slice(0, 3).map((pkg) => (
                  <div key={pkg._id} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-950">
                        <img
                          src={pkg.coverImage}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/10">
                          {pkg.category}
                        </span>
                      </div>
                      <div className="p-4 space-y-2">
                        <h4 className="font-bold text-slate-900 dark:text-white text-base line-clamp-1">{pkg.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                          <span>{pkg.destination}</span>
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{pkg.description}</p>
                      </div>
                    </div>
                    <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-800/60 mt-3">
                      <div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block">From</span>
                        <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">${pkg.discountPrice || pkg.price}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedBookingForModal(pkg);
                          setIsBookingModalOpen(true);
                        }}
                        className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white text-xs font-semibold transition"
                      >
                        Book Trip
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BOOKINGS */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">My Travel Reservations</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">View itineraries, statuses, and manage your booked trips</p>
              </div>
              <Link
                href="/packages"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-md shadow-emerald-600/20"
              >
                + Book New Trip
              </Link>
            </div>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={booking.packageCoverImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'}
                      alt={booking.packageTitle}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {getStatusBadge(booking.status)}
                        <span className="text-xs text-slate-500">Ref: #{booking._id}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{booking.packageTitle}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> {booking.destination}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                          {new Date(booking.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span>•</span>
                        <span>{booking.guestsCount} Travelers</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-800">
                    <div className="text-right">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Total Paid</span>
                      <span className="text-base font-bold text-slate-900 dark:text-white">${booking.totalPrice}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {booking.status !== 'cancelled' && (
                        <button
                          onClick={() => handleCancelBooking(booking._id)}
                          disabled={cancellingId === booking._id}
                          className="px-3 py-1.5 rounded-lg border border-red-500/30 text-red-500 dark:text-red-400 hover:bg-red-500/10 text-xs font-medium transition cursor-pointer disabled:opacity-50"
                        >
                          {cancellingId === booking._id ? 'Cancelling...' : 'Cancel'}
                        </button>
                      )}
                      <button
                        onClick={() => alert(`Showing receipt & itinerary for reservation #${booking._id}`)}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: WISHLIST */}
        {activeTab === 'wishlist' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Your Travel Wishlist</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Bucket list journeys you have saved for your next getaway</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.filter(pkg => stats?.savedPackageIds?.includes(pkg._id)).map((pkg) => (
                <div key={pkg._id} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden group shadow-sm">
                  <div className="relative h-48 bg-slate-100 dark:bg-slate-950">
                    <img
                      src={pkg.coverImage}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <button 
                      onClick={() => handleToggleWishlist(pkg._id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-rose-500 backdrop-blur-md hover:scale-110 transition cursor-pointer"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{pkg.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> {pkg.destination}
                    </p>
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block">Price</span>
                        <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">${pkg.discountPrice || pkg.price}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedBookingForModal(pkg);
                          setIsBookingModalOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PROFILE SETTINGS */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Traveler Profile & Preferences</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Update personal travel documentation, contact email, and special preferences</p>
            </div>

            <form onSubmit={handleProfileSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Legal Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Passport Number</label>
                  <input
                    type="text"
                    value={userPassport}
                    onChange={(e) => setUserPassport(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              {profileSaved && (
                <div className="p-3 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Preferences saved successfully!
                </div>
              )}

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-lg shadow-emerald-600/20 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Booking Modal */}
      <BookingModal
        pkg={selectedBookingForModal}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSuccess={loadData}
      />
    </div>
  );
}

export default function UserDashboardPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-slate-400">Loading traveler dashboard...</div>}>
      <UserDashboardContent />
    </Suspense>
  );
}

