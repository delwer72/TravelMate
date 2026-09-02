"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BookingModal from '@/components/dashboard/BookingModal';
import { getPackages, TourPackage } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import {
  Sparkles,
  Gift,
  ShieldCheck,
  Zap,
  MapPin,
  Heart,
  ChevronRight,
  Compass,
  CheckCircle,
  Clock,
  Plane
} from 'lucide-react';

function GuestDashboardContent() {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get('tab') || 'portal';

  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    getPackages().then(setPackages);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-start gap-6 min-h-[calc(100vh-8rem)]">
      <DashboardSidebar />

      <main className="flex-1 min-w-0 space-y-8">
        <DashboardHeader
          title="Guest Discovery Hub"
          subtitle="Explore member advantages, preview exclusive travel perks, and unlock curated itineraries."
          role="guest"
        />

        {/* Welcome VIP Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/30 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-8 text-emerald-500/10 pointer-events-none">
            <Sparkles className="w-48 h-48" />
          </div>

          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" /> Welcome Traveler Perk
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Unlock Up to 20% Off Your First Adventure
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Join TravelMate to gain free cancellation protection, access verified reviews, save custom bucket lists, and collect travel reward points on every booking.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/auth/signup"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Create Free Account
              </Link>
              <Link
                href="/auth/signin"
                className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Member Benefits Comparison Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Why Create a Free Account?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-400">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-base">Travel Rewards & Cashbacks</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Earn 10% point value back on every tour package booking. Redeem points for free airport transfers and room upgrades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-base">Flexible Cancellation Guarantee</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cancel up to 7 days before departure with 100% instant refund into your original payment method.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white text-base">Instant Priority Booking</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Skip waitlists for high-demand expeditions like the Inca Trail, Swiss Glacier Express, and Serengeti Safaris.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Tours Spotlight */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Trending Worldwide Tours</h3>
              <p className="text-xs text-slate-400">Guest favorite destinations open for instant reservation</p>
            </div>
            <Link href="/packages" className="text-xs font-semibold text-emerald-400 hover:text-orange-300 flex items-center gap-1">
              Explore All Packages →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.slice(0, 3).map((pkg) => (
              <div key={pkg._id} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={pkg.coverImage}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/10">
                      {pkg.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-bold text-white text-base line-clamp-1">{pkg.title}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {pkg.destination}
                    </p>
                    <p className="text-xs text-slate-400 line-clamp-2">{pkg.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-2">
                  <div>
                    <span className="text-xs text-slate-400 block">Starting at</span>
                    <span className="text-lg font-bold text-emerald-400">${pkg.discountPrice || pkg.price}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPkg(pkg);
                      setIsBookingOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md transition"
                  >
                    Quick Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BookingModal
        pkg={selectedPkg}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default function GuestDashboardPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-slate-400">Loading guest portal...</div>}>
      <GuestDashboardContent />
    </Suspense>
  );
}

