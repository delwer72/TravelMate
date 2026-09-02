"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import PackageModal from '@/components/dashboard/PackageModal';
import { useAuth } from '@/lib/auth-context';
import {
  getAdminStats,
  getAdminBookings,
  getPackages,
  getAdminUsers,
  updateBookingStatus,
  deletePackage,
  AdminStats,
  Booking,
  TourPackage,
  RegisteredUser,
} from '@/lib/api';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';
import {
  DollarSign,
  CalendarCheck,
  Users,
  Package,
  Plus,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  TrendingUp,
  Filter,
  Search,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

function AdminDashboardContent() {
  const { user, isLoading: authLoading, logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get('tab') || 'analytics';

  const [activeTab, setActiveTab] = useState<'analytics' | 'packages' | 'bookings' | 'users'>(
    tabQuery as any || 'analytics'
  );
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [usersList, setUsersList] = useState<RegisteredUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [packageSearch, setPackageSearch] = useState('');
  const [bookingFilter, setBookingFilter] = useState('All');

  const loadData = async () => {
    setLoading(true);
    try {
      const [statsRes, bookingsRes, packagesRes, usersRes] = await Promise.all([
        getAdminStats(),
        getAdminBookings(),
        getPackages(),
        getAdminUsers(),
      ]);
      setStats(statsRes);
      setBookings(bookingsRes);
      setPackages(packagesRes);
      setUsersList(usersRes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (tabQuery && ['analytics', 'packages', 'bookings', 'users'].includes(tabQuery)) {
      setActiveTab(tabQuery as any);
    }
  }, [tabQuery]);

  useEffect(() => {
    // Wait until auth state resolves
    if (authLoading) return;
    // Not logged in → sign-in
    if (!user) {
      router.push('/auth/signin?redirect=/dashboard/admin');
      return;
    }
    // Wrong role → access denied
    if (user.role !== 'admin') {
      router.push('/dashboard/access-denied');
      return;
    }
    loadData();
  }, [user, authLoading]);

  const handleStatusChange = async (
    id: string,
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  ) => {
    await updateBookingStatus(id, status);
    loadData();
  };

  const handleDeletePackage = async (id: string) => {
    if (confirm('Are you sure you want to delete this travel package?')) {
      await deletePackage(id);
      loadData();
    }
  };

  const filteredPackages = packages.filter((p) =>
    p.title.toLowerCase().includes(packageSearch.toLowerCase()) ||
    p.destination.toLowerCase().includes(packageSearch.toLowerCase())
  );

  const filteredBookings = bookingFilter === 'All'
    ? bookings
    : bookings.filter((b) => b.status === bookingFilter.toLowerCase());

  // Sample registered users
  const dummyUsers = [
    { id: 'usr-1', name: 'Sophia Miller', email: 'sophia.m@gmail.com', role: 'user', tripsCount: 4, joined: '2026-05-12' },
    { id: 'usr-2', name: 'Liam Wilson', email: 'liam.w@outlook.com', role: 'user', tripsCount: 2, joined: '2026-06-03' },
    { id: 'usr-3', name: 'Emma Davis', email: 'emma.davis@travelmate.com', role: 'admin', tripsCount: 8, joined: '2026-01-10' },
    { id: 'usr-4', name: 'Noah Taylor', email: 'noah.t@yahoo.com', role: 'user', tripsCount: 1, joined: '2026-07-22' },
    { id: 'usr-5', name: 'Olivia Martinez', email: 'olivia.m@icloud.com', role: 'guest', tripsCount: 0, joined: '2026-08-14' },
  ];

  // Show a spinner while auth resolves
  if (authLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-400 text-sm">
        <svg className="animate-spin w-5 h-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        Verifying access...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-start gap-6 min-h-[calc(100vh-8rem)]">
      <DashboardSidebar />

      <main className="flex-1 min-w-0">
        <DashboardHeader
          title="Admin Control Center"
          subtitle="Real-time revenue monitoring, booking operations, inventory control, and traveler management."
          role="admin"
          actionLabel="Add Tour Package"
          onActionClick={() => setIsPackageModalOpen(true)}
        />

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 mb-6 gap-2 sm:gap-6 overflow-x-auto">
          {[
            { id: 'analytics', label: 'Analytics & Revenue' },
            { id: 'packages', label: 'Tour Packages', count: packages.length },
            { id: 'bookings', label: 'Bookings Management', count: bookings.length },
            { id: 'users', label: 'Registered Users', count: usersList.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="px-2 py-0.5 rounded-full text-xs bg-slate-800 text-slate-300">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>


        {/* TAB 1: ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* KPI Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-emerald-400">
                  <DollarSign className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Gross Revenue</p>
                <h3 className="text-3xl font-extrabold text-white mt-1">
                  ${(stats?.totalRevenue || 54600).toLocaleString()}
                </h3>
                <p className="text-xs text-emerald-400 mt-2 font-medium flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +24.8% this month
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-emerald-400">
                  <CalendarCheck className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Reservations</p>
                <h3 className="text-3xl font-extrabold text-white mt-1">{stats?.totalBookings ?? 37}</h3>
                <p className="text-xs text-emerald-400 mt-2 font-medium">94% Fulfillment rate</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-emerald-400">
                  <Package className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Packages</p>
                <h3 className="text-3xl font-extrabold text-white mt-1">{packages.length}</h3>
                <p className="text-xs text-slate-400 mt-2">7 global regions</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-teal-400">
                  <Users className="w-16 h-16" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Registered Travelers</p>
                <h3 className="text-3xl font-extrabold text-white mt-1">{stats?.totalUsers ?? 184}</h3>
                <p className="text-xs text-emerald-400 mt-2 font-medium">+18 new this week</p>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Monthly Revenue Trend Area Chart */}
              <div className="lg:col-span-2 p-6 rounded-3xl bg-slate-900 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Monthly Revenue Trends</h3>
                    <p className="text-xs text-slate-400">Gross earnings (USD) across 2026</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Data
                  </span>
                </div>
                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stats?.monthlyRevenue || []}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="month" stroke="#71717a" fontSize={12} />
                      <YAxis stroke="#71717a" fontSize={12} tickFormatter={(val) => `$${val}`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px' }}
                        formatter={(val: any) => [`$${Number(val).toLocaleString()}`, 'Revenue']}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Status Breakdown Donut Chart */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Booking Status</h3>
                  <p className="text-xs text-slate-400 mb-2">Reservation distribution</p>
                </div>
                <div className="h-52 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stats?.statusBreakdown || []}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {(stats?.statusBreakdown || []).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
                  {(stats?.statusBreakdown || []).map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-400">{item.name}:</span>
                      <span className="font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Recent Bookings preview */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Recent Traveler Reservations</h3>
                <button onClick={() => setActiveTab('bookings')} className="text-xs font-semibold text-emerald-400 hover:text-emerald-300">
                  View All ({bookings.length}) →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs uppercase text-slate-400 border-b border-slate-800 pb-2">
                    <tr>
                      <th className="pb-3 font-semibold">Traveler</th>
                      <th className="pb-3 font-semibold">Tour Package</th>
                      <th className="pb-3 font-semibold">Travel Date</th>
                      <th className="pb-3 font-semibold">Amount</th>
                      <th className="pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {bookings.slice(0, 4).map((b) => (
                      <tr key={b._id} className="hover:bg-slate-850/40">
                        <td className="py-3.5">
                          <p className="font-semibold text-white">{b.travelerName}</p>
                          <p className="text-xs text-slate-400">{b.travelerEmail}</p>
                        </td>
                        <td className="py-3.5 text-slate-300 font-medium">{b.packageTitle}</td>
                        <td className="py-3.5 text-slate-400 text-xs">
                          {new Date(b.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td className="py-3.5 font-bold text-emerald-400">${b.totalPrice}</td>
                        <td className="py-3.5">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${
                            b.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                            b.status === 'pending' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                            'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                          }`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PACKAGES */}
        {activeTab === 'packages' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search package title, destination..."
                  value={packageSearch}
                  onChange={(e) => setPackageSearch(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                onClick={() => setIsPackageModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-500/20 transition flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add New Tour Package
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => (
                <div key={pkg._id} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between group">
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.coverImage}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                        {pkg.category}
                      </span>
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white">
                        ★ {pkg.ratingsAverage} ({pkg.ratingsQuantity})
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <h4 className="font-bold text-white text-base line-clamp-1">{pkg.title}</h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {pkg.destination}
                      </p>
                      <p className="text-xs text-slate-400 line-clamp-2">{pkg.description}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-800/80 mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Price</span>
                      <span className="text-lg font-extrabold text-white">${pkg.discountPrice || pkg.price}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDeletePackage(pkg._id)}
                        className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition"
                        title="Delete package"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BOOKINGS */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-white">Manage Traveler Bookings</h3>
              <div className="flex items-center gap-2">
                {['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setBookingFilter(f)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                      bookingFilter === f
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase text-slate-400 border-b border-slate-800 pb-2">
                  <tr>
                    <th className="pb-3 font-semibold">Ref & Traveler</th>
                    <th className="pb-3 font-semibold">Package & Destination</th>
                    <th className="pb-3 font-semibold">Date & Guests</th>
                    <th className="pb-3 font-semibold">Total Paid</th>
                    <th className="pb-3 font-semibold">Current Status</th>
                    <th className="pb-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredBookings.map((b) => (
                    <tr key={b._id} className="hover:bg-slate-850/40">
                      <td className="py-4">
                        <span className="text-[11px] font-mono text-slate-500 block">#{b._id}</span>
                        <p className="font-semibold text-white">{b.travelerName}</p>
                        <p className="text-xs text-slate-400">{b.travelerEmail}</p>
                        {b.travelerPhone && <p className="text-xs text-slate-500">{b.travelerPhone}</p>}
                      </td>
                      <td className="py-4">
                        <p className="font-medium text-slate-200">{b.packageTitle}</p>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-emerald-400" /> {b.destination}
                        </p>
                      </td>
                      <td className="py-4 text-xs text-slate-300">
                        <p className="font-semibold text-white">
                          {new Date(b.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="text-slate-400">{b.guestsCount} Guests</p>
                      </td>
                      <td className="py-4 font-bold text-emerald-400">${b.totalPrice}</td>
                      <td className="py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${
                          b.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          b.status === 'pending' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          b.status === 'completed' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' :
                          'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {b.status !== 'confirmed' && (
                            <button
                              onClick={() => handleStatusChange(b._id, 'confirmed')}
                              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-xs font-semibold transition"
                            >
                              Confirm
                            </button>
                          )}
                          {b.status !== 'completed' && (
                            <button
                              onClick={() => handleStatusChange(b._id, 'completed')}
                              className="px-2.5 py-1 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/20 text-xs font-semibold transition"
                            >
                              Complete
                            </button>
                          )}
                          {b.status !== 'cancelled' && (
                            <button
                              onClick={() => handleStatusChange(b._id, 'cancelled')}
                              className="px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold transition"
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: USERS */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Registered Travelers & Accounts</h3>
                <p className="text-xs text-slate-400 mt-0.5">Real-time accounts retrieved directly from MongoDB</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full">
                {usersList.length} Accounts
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 overflow-x-auto">
              {usersList.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-sm">
                  No registered users found in the database.
                </div>
              ) : (
                <table className="w-full text-left text-sm">
                  <thead className="text-xs uppercase text-slate-400 border-b border-slate-800 pb-2">
                    <tr>
                      <th className="pb-3 font-semibold">User</th>
                      <th className="pb-3 font-semibold">Email</th>
                      <th className="pb-3 font-semibold">Role</th>
                      <th className="pb-3 font-semibold">Saved Items</th>
                      <th className="pb-3 font-semibold">Member Since</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {usersList.map((u) => (
                      <tr key={u._id} className="hover:bg-slate-850/40">
                        <td className="py-3.5 font-semibold text-white">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center font-bold text-xs text-white uppercase shadow-sm">
                              {u.name ? u.name.charAt(0) : 'U'}
                            </div>
                            <span>{u.name || 'Unnamed User'}</span>
                          </div>
                        </td>
                        <td className="py-3.5 text-slate-400">{u.email}</td>
                        <td className="py-3.5">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                            u.role === 'admin' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                            u.role === 'user' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' :
                            'bg-slate-800 text-slate-300'
                          }`}>
                            {u.role}
                          </span>
                        </td>
                        <td className="py-3.5 font-bold text-emerald-400">
                          {u.savedPackages?.length || 0} saved
                        </td>
                        <td className="py-3.5 text-xs text-slate-400">
                          {u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Package Creation Modal */}
      <PackageModal

        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        onSuccess={() => loadData()}
      />
    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-slate-400">Loading admin dashboard...</div>}>
      <AdminDashboardContent />
    </Suspense>
  );
}

