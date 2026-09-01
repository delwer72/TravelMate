"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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
  Heart,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Compass,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Adventure',
  'Beach',
  'Cultural',
  'Wildlife',
  'Luxury',
  'Mountain',
];

/* ─── animation variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: 'easeOut' },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: -16, scale: 0.96, transition: { duration: 0.25 } },
};

export default function PackagesPage() {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3500);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const gridTopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchFilteredPackages();
  }, [category, sortBy]);

  const fetchFilteredPackages = async () => {
    setLoading(true);
    try {
      const data = await getPackages({
        category: category !== 'All' ? category : undefined,
        search: search.trim() || undefined,
        maxPrice: maxPrice < 3500 ? maxPrice : undefined,
        sort: sortBy,
      });
      setPackages(data);
      setCurrentPage(1);
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

  const resetFilters = () => {
    setSearch('');
    setCategory('All');
    setMaxPrice(3500);
    setSortBy('popular');
    setCurrentPage(1);
    fetchFilteredPackages();
  };

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPackages = packages.length;
  const totalPages = Math.max(1, Math.ceil(totalPackages / pageSize));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedPackages = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * pageSize;
    return packages.slice(startIndex, startIndex + pageSize);
  }, [packages, validCurrentPage, pageSize]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === validCurrentPage) return;
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= validCurrentPage - delta && i <= validCurrentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  const startRecord = (validCurrentPage - 1) * pageSize + 1;
  const endRecord = Math.min(validCurrentPage * pageSize, totalPackages);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10 pb-16">

      {/* ── Header Banner ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative rounded-3xl bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-emerald-100/80 dark:border-slate-800 p-8 sm:p-12 overflow-hidden shadow-xl shadow-emerald-500/5 dark:shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-500/10 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-600/20 uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> 100+ Handcrafted Expeditions Worldwide
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Discover Unforgettable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
              Adventures
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            From tropical beaches in Bali &amp; Maldives to Alpine glacier treks in Switzerland and wildlife safaris across the Serengeti. Explore guaranteed departure dates with full inclusions.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
            onSubmit={handleSearchSubmit}
            className="pt-2 flex flex-col sm:flex-row gap-2 max-w-xl"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by destination, country, or trip title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 shadow-sm"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition cursor-pointer duration-200"
            >
              Search
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* ── Filter & Toolbar ── */}
      <motion.div
        ref={gridTopRef}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  category === cat
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Sort */}
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-300">
              <ArrowUpDown className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span className="text-slate-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-slate-900 dark:text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="popular" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Most Popular</option>
                <option value="rating" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Highest Rated</option>
                <option value="price-asc" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Price: Low to High</option>
                <option value="price-desc" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Price: High to Low</option>
              </select>
            </div>

            {/* Max Budget */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-300">
              <span className="text-slate-500">Max Budget:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">${maxPrice}</span>
              <input
                type="range"
                min="500"
                max="3500"
                step="100"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  fetchFilteredPackages();
                }}
                className="w-20 sm:w-24 accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* Per Page */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-300">
              <span className="text-slate-500">Show:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-transparent text-emerald-600 dark:text-emerald-400 font-bold focus:outline-none cursor-pointer"
              >
                <option value={6} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">6</option>
                <option value={9} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">9</option>
                <option value={12} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">12</option>
                <option value={24} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">24</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <p>
            Showing <span className="font-bold text-slate-900 dark:text-white">{totalPackages > 0 ? startRecord : 0}-{endRecord}</span> of{' '}
            <span className="font-bold text-emerald-600 dark:text-emerald-400">{totalPackages}</span> travel packages
          </p>

          <AnimatePresence>
            {(category !== 'All' || search || maxPrice < 3500 || sortBy !== 'popular') && (
              <motion.button
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-orange-300 font-medium transition cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset Filters
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Cards / Loading / Empty ── */}
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="h-96 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-pulse flex flex-col justify-between p-6"
            >
              <div className="h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl w-full mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
                <div className="h-3 bg-slate-200/60 dark:bg-slate-800/60 rounded w-1/2" />
                <div className="h-3 bg-slate-200/40 dark:bg-slate-800/40 rounded w-full" />
              </div>
              <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-full mt-4" />
            </motion.div>
          ))}
        </motion.div>
      ) : paginatedPackages.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <Compass className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto" />
          </motion.div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">No packages found</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            We couldn't find any packages matching your search criteria. Try adjusting your category or budget filter.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={resetFilters}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg transition"
          >
            Clear all filters
          </motion.button>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${sortBy}-${currentPage}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {paginatedPackages.map((pkg) => {
              const isSaved = savedIds.includes(pkg._id);
              return (
                <motion.div
                  key={pkg._id}
                  variants={cardVariant}
                  whileHover={{ y: -6, boxShadow: '0 24px 48px -8px rgba(16,185,129,0.12)' }}
                  className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300 flex flex-col justify-between shadow-lg shadow-slate-200/20 dark:shadow-black/20"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden bg-slate-100 dark:bg-slate-950">
                      <img
                        src={pkg.coverImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'}
                        alt={pkg.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                        {pkg.category}
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => toggleWishlist(pkg._id, e)}
                        className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-rose-400 transition cursor-pointer"
                        title="Save to Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </motion.button>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-semibold">
                          <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                          {pkg.ratingsAverage} ({pkg.ratingsQuantity})
                        </span>
                        <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-semibold text-emerald-400">
                          {pkg.durationDays} Days / {pkg.durationDays - 1} Nights
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-3">
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug line-clamp-1">
                        {pkg.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span className="truncate">{pkg.destination} • {pkg.country}</span>
                      </p>

                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {pkg.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {pkg.highlights?.slice(0, 2).map((h, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800/80 flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400" /> {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-800/80 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Starting from</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900 dark:text-white">
                          ${pkg.discountPrice || pkg.price}
                        </span>
                        {pkg.discountPrice && (
                          <span className="text-xs text-slate-400 line-through">${pkg.price}</span>
                        )}
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">/ person</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => {
                        setSelectedPkg(pkg);
                        setIsBookingModalOpen(true);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" /> Book Now
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Pagination ── */}
      <AnimatePresence>
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Page <span className="font-bold text-slate-900 dark:text-white">{validCurrentPage}</span> of{' '}
              <span className="font-bold text-slate-900 dark:text-white">{totalPages}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handlePageChange(1)}
                disabled={validCurrentPage === 1}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
                title="First Page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>

              <div className="flex items-center gap-1 px-1">
                {getPageNumbers().map((p, idx) =>
                  p === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-xs text-slate-400 dark:text-slate-600">
                      •••
                    </span>
                  ) : (
                    <motion.button
                      key={`page-${p}`}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.93 }}
                      onClick={() => handlePageChange(p as number)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition ${
                        validCurrentPage === p
                          ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md shadow-emerald-600/25'
                          : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      {p}
                    </motion.button>
                  )
                )}
              </div>

              <button
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={validCurrentPage === totalPages}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
                title="Last Page"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <BookingModal
        pkg={selectedPkg}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
