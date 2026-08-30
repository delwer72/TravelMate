"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/dashboard/BookingModal';
import { getPackages, TourPackage } from '@/lib/api';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ArrowUpDown,
  Heart
} from 'lucide-react';

const CATEGORIES = ['All', 'Adventure', 'Beach', 'Cultural', 'Wildlife', 'Luxury', 'Mountain'];

export default function PackagesPage() {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    fetchFilteredPackages();
  }, [category, sortBy]);

  const fetchFilteredPackages = async () => {
    setLoading(true);
    try {
      const data = await getPackages({
        category: category !== 'All' ? category : undefined,
        search: search || undefined,
        maxPrice: maxPrice < 3000 ? maxPrice : undefined,
        sort: sortBy,
      });
      setPackages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchFilteredPackages();
  };

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Handcrafted Expeditions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Discover Unforgettable <span className="text-orange-500">Adventures</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            From tropical beaches in Bali to Alpine treks across the Swiss glaciers, explore all-inclusive travel packages curated by local experts with guaranteed departure dates.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search destination, country or trip title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-orange-500 shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                category === cat
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Price Filter controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-2 rounded-xl text-xs text-zinc-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-zinc-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="popular" className="bg-zinc-900">Most Popular</option>
              <option value="rating" className="bg-zinc-900">Highest Rated</option>
              <option value="price-asc" className="bg-zinc-900">Price: Low to High</option>
              <option value="price-desc" className="bg-zinc-900">Price: High to Low</option>
            </select>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-2 rounded-xl text-xs text-zinc-300">
            <span className="text-zinc-500">Max Budget:</span>
            <span className="font-bold text-orange-400">${maxPrice}</span>
            <input
              type="range"
              min="500"
              max="3000"
              step="100"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(Number(e.target.value));
                fetchFilteredPackages();
              }}
              className="w-24 accent-orange-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {packages.map((pkg) => {
          const isSaved = savedIds.includes(pkg._id);
          return (
            <div
              key={pkg._id}
              className="group rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-orange-500/5"
            >
              <div>
                {/* Image header */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.coverImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-md">
                    {pkg.category}
                  </span>

                  <button
                    onClick={(e) => toggleWishlist(pkg._id, e)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-rose-400 transition"
                    title="Save to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {pkg.ratingsAverage} ({pkg.ratingsQuantity} reviews)
                    </span>
                    <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-semibold text-emerald-400">
                      {pkg.durationDays} Days / {pkg.durationDays - 1} Nights
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-white text-lg group-hover:text-orange-400 transition leading-snug">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-zinc-400 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{pkg.destination}</span>
                  </p>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {pkg.highlights?.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-zinc-950 text-zinc-300 border border-zinc-800/80 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-orange-400" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-zinc-800/80 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-zinc-400 block font-medium">Starting from</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">
                      ${pkg.discountPrice || pkg.price}
                    </span>
                    {pkg.discountPrice && (
                      <span className="text-xs text-zinc-500 line-through">
                        ${pkg.price}
                      </span>
                    )}
                    <span className="text-[10px] text-zinc-400">/ person</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPkg(pkg);
                    setIsBookingModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-lg shadow-orange-500/20 transition flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" /> Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Modal */}
      <BookingModal
        pkg={selectedPkg}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
