"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BookingModal from '@/components/dashboard/BookingModal';
import {
  getUserBookings,
  getUserStats,
  getPackages,
  updateBookingStatus,
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get('tab') || 'overview';

  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'wishlist' | 'settings'>(
    tabQuery as any || 'overview'
  );
  const [role, setRole] = useState<'user' | 'admin' | 'guest'>('user');
  const [stats, setStats] = useState<UserStats | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBookingForModal, setSelectedBookingForModal] = useState<TourPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Profile form state
  const [userName, setUserName] = useState('Alex Rivera');
  const [userEmail, setUserEmail] = useState('alex.rivera@travelmate.com');
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
    loadData();
  }, []);

  const handleRoleChange = (newRole: 'user' | 'admin' | 'guest') => {
    if (newRole === 'admin') router.push('/dashboard/admin');
    else if (newRole === 'guest') router.push('/dashboard/guest');
    else router.push('/dashboard/user');
  };

  const handleCancelBooking = async (id: string) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      await updateBookingStatus(id, 'cancelled');
      loadData();
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
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Clock className="w-3.5 h-3.5" /> Pending Review
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
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

  return (
    <div className="flex gap-6 min-h-[calc(100vh-8rem)]">
      <DashboardSidebar currentRole="user" onRoleChange={handleRoleChange} />

      <main className="flex-1 min-w-0">
        <DashboardHeader
          title="Traveler Dashboard"
          subtitle="Welcome back, explore upcoming trips, manage reservations, and track travel rewards."
          role="user"
        />

        {/* Navigation Tabs */}
        <div className="flex border-b border-zinc-800 mb-6 gap-2 sm:gap-6 overflow-x-auto">
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
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="px-2 py-0.5 rounded-full text-xs bg-zinc-800 text-zinc-300">
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
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-orange-400">
                  <Plane className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Active Bookings</p>
                <h3 className="text-3xl font-extrabold text-white mt-1">{stats?.activeTrips ?? 1}</h3>
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ready for departure
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-indigo-400">
                  <Calendar className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Total Trips Taken</p>
                <h3 className="text-3xl font-extrabold text-white mt-1">{stats?.totalTrips ?? 3}</h3>
                <p className="text-xs text-zinc-400 mt-2">Across 5 continents</p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-rose-400">
                  <Heart className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Saved Wishlist</p>
                <h3 className="text-3xl font-extrabold text-white mt-1">{stats?.savedPlaces ?? 4}</h3>
                <p className="text-xs text-rose-400 mt-2 flex items-center gap-1">
                  <span>Explore dream bucketlist</span>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-amber-400">
                  <TrendingUp className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Traveler Reward Points</p>
                <h3 className="text-3xl font-extrabold text-white mt-1">{(stats?.rewardPoints ?? 345).toLocaleString()} pts</h3>
                <p className="text-xs text-amber-400 mt-2 font-medium">Silver Voyager Status</p>
              </div>
            </div>

            {/* Next Upcoming Adventure Spotlight */}
            {bookings.length > 0 && (
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-orange-500/20 shadow-xl overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between relative z-10">
                  <div className="space-y-3 max-w-xl">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Next Upcoming Trip
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">{bookings[0].packageTitle}</h3>
                    <p className="text-zinc-300 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span>{bookings[0].destination}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4 text-orange-400" />
                      <span>Departure: {new Date(bookings[0].startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="px-3 py-1.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-200">
                        Traveler: <span className="font-semibold text-white">{bookings[0].travelerName}</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-200">
                        Party: <span className="font-semibold text-white">{bookings[0].guestsCount} Guests</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <button
                      onClick={() => setActiveTab('bookings')}
                      className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 transition flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-4 h-4" /> View Boarding Pass & Details
                    </button>
                    <Link
                      href="/packages"
                      className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-sm transition flex items-center justify-center gap-2"
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
                  <h3 className="text-xl font-bold text-white">Curated For You</h3>
                  <p className="text-xs text-zinc-400">Hand-picked destinations matching your traveler profile</p>
                </div>
                <Link href="/packages" className="text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1">
                  See All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {packages.slice(0, 3).map((pkg) => (
                  <div key={pkg._id} className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition flex flex-col justify-between">
                    <div>
                      <div className="relative h-44 overflow-hidden">
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
                        <h4 className="font-bold text-white text-base line-clamp-1">{pkg.title}</h4>
                        <p className="text-xs text-zinc-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-orange-400" />
                          <span>{pkg.destination}</span>
                        </p>
                        <p className="text-xs text-zinc-400 line-clamp-2">{pkg.description}</p>
                      </div>
                    </div>
                    <div className="p-4 pt-0 flex items-center justify-between border-t border-zinc-800/60 mt-3">
                      <div>
                        <span className="text-xs text-zinc-400 block">From</span>
                        <span className="text-lg font-bold text-orange-400">${pkg.discountPrice || pkg.price}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedBookingForModal(pkg);
                          setIsBookingModalOpen(true);
                        }}
                        className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-orange-500 hover:text-white text-zinc-200 text-xs font-semibold transition"
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
                <h3 className="text-xl font-bold text-white">My Travel Reservations</h3>
                <p className="text-xs text-zinc-400">View itineraries, statuses, and manage your booked trips</p>
              </div>
              <Link
                href="/packages"
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition shadow-md shadow-orange-500/20"
              >
                + Book New Trip
              </Link>
            </div>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-zinc-700 transition"
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
                        <span className="text-xs text-zinc-500">Ref: #{booking._id}</span>
                      </div>
                      <h4 className="text-base font-bold text-white">{booking.packageTitle}</h4>
                      <p className="text-xs text-zinc-400 flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-orange-400" /> {booking.destination}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-orange-400" />
                          {new Date(booking.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span>•</span>
                        <span>{booking.guestsCount} Travelers</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-zinc-800">
                    <div className="text-right">
                      <span className="text-xs text-zinc-400 block">Total Paid</span>
                      <span className="text-base font-bold text-white">${booking.totalPrice}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {booking.status !== 'cancelled' && (
                        <button
                          onClick={() => handleCancelBooking(booking._id)}
                          className="px-3 py-1.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-medium transition"
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        onClick={() => alert(`Showing receipt & itinerary for reservation #${booking._id}`)}
                        className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition"
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
              <h3 className="text-xl font-bold text-white">Your Travel Wishlist</h3>
              <p className="text-xs text-zinc-400">Bucket list journeys you have saved for your next getaway</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.slice(2, 6).map((pkg) => (
                <div key={pkg._id} className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden group">
                  <div className="relative h-48">
                    <img
                      src={pkg.coverImage}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-rose-500 backdrop-blur-md">
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                  <div className="p-5 space-y-3">
                    <h4 className="font-bold text-white text-base">{pkg.title}</h4>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" /> {pkg.destination}
                    </p>
                    <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-zinc-400 block">Price</span>
                        <span className="text-base font-bold text-orange-400">${pkg.discountPrice || pkg.price}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedBookingForModal(pkg);
                          setIsBookingModalOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition"
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
          <div className="max-w-2xl bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Traveler Profile & Preferences</h3>
              <p className="text-xs text-zinc-400">Update personal travel documentation, contact email, and special preferences</p>
            </div>

            <form onSubmit={handleProfileSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Full Legal Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Passport Number</label>
                  <input
                    type="text"
                    value={userPassport}
                    onChange={(e) => setUserPassport(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {profileSaved && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Preferences saved successfully!
                </div>
              )}

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 transition"
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
    <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-zinc-400">Loading traveler dashboard...</div>}>
      <UserDashboardContent />
    </Suspense>
  );
}

