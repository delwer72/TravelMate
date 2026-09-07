'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Star,
  Calendar,
  ArrowRight,
  Sparkles,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Compass,
  RotateCcw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  fetchPackages,
  setFilters,
  resetFilters,
  setPage,
  selectAllPackages,
  selectPackagesLoading,
  selectPackagesFilters,
  selectCurrentPage,
  selectPageSize,
  selectPaginatedPackages,
  selectTotalPages,
} from '@/store/slices/packagesSlice';
import {
  openBookingModal,
  closeBookingModal,
  selectBookingModalOpen,
  selectSelectedPackage,
} from '@/store/slices/uiSlice';
import BookingModal from '@/components/dashboard/BookingModal';

const CATEGORIES: string[] = [
  'All',
  'Hot Deals',
  'Adventure',
  'Beach',
  'Cultural',
  'Luxury',
  'Mountain',
];

export default function BestPackages() {
  const dispatch  = useAppDispatch();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ── Redux state ───────────────────────────────────────────────────────────
  const packages         = useAppSelector(selectPaginatedPackages);
  const allPackages      = useAppSelector(selectAllPackages);
  const loading          = useAppSelector(selectPackagesLoading);
  const filters          = useAppSelector(selectPackagesFilters);
  const currentPage      = useAppSelector(selectCurrentPage);
  const pageSize         = useAppSelector(selectPageSize);
  const totalPages       = useAppSelector(selectTotalPages);
  const bookingModalOpen = useAppSelector(selectBookingModalOpen);
  const selectedPkg      = useAppSelector(selectSelectedPackage);

  // Local search input (not committed until Submit)
  const [searchInput, setSearchInput] = React.useState('');

  const totalPackages = allPackages.length;
  const startRecord   = totalPackages > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const endRecord     = Math.min(currentPage * pageSize, totalPackages);

  // ── Fetch whenever filters change ─────────────────────────────────────────
  useEffect(() => {
    dispatch(fetchPackages(filters));
  }, [dispatch, filters]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFilters({ search: searchInput }));
  };

  const handleClearSearch = () => {
    setSearchInput('');
    dispatch(setFilters({ search: '' }));
  };

  const handleResetAll = () => {
    setSearchInput('');
    dispatch(resetFilters());
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    dispatch(setPage(page));
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ── Pagination page numbers with ellipsis ─────────────────────────────────
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <section
      ref={sectionRef}
      className="bg-slate-50/50 dark:bg-slate-950/80 py-20 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Featured Expeditions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Best Packages For You
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Handpicked vacation packages, guided itineraries, and unforgettable adventures across the globe.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto pt-2 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by country, destination, or title..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-11 pr-10 py-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition cursor-pointer shrink-0 hover:scale-105 active:scale-95 duration-200"
            >
              Search
            </button>
          </form>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((category) => {
            const isActive = filters.category === category;
            return (
              <button
                key={category}
                onClick={() => dispatch(setFilters({ category }))}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 text-white shadow-lg shadow-emerald-600/25 scale-105'
                    : 'bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-emerald-400/40'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <p>
            Showing{' '}
            <span className="font-bold text-slate-900 dark:text-white">
              {totalPackages > 0 ? startRecord : 0}-{endRecord}
            </span>{' '}
            of <span className="font-bold text-emerald-600 dark:text-emerald-400">{totalPackages}</span> packages
            {filters.search && (
              <span>
                {' '}for &ldquo;<span className="text-slate-900 dark:text-white font-medium">{filters.search}</span>&rdquo;
              </span>
            )}
          </p>
          {(filters.category !== 'All' || filters.search) && (
            <button
              onClick={handleResetAll}
              className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 font-medium transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
            </button>
          )}
        </div>

        {/* Loading Skeletons */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xl animate-pulse h-96 flex flex-col justify-between p-6"
              >
                <div className="h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl w-full mb-4" />
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
                  <div className="h-3 bg-slate-200/60 dark:bg-slate-800/60 rounded w-1/2" />
                  <div className="h-3 bg-slate-200/40 dark:bg-slate-800/40 rounded w-full" />
                </div>
                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-full mt-4" />
              </div>
            ))}
          </div>
        ) : packages.length === 0 ? (
          <div className="text-center py-16 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            <Compass className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">No packages found</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
              We couldn&apos;t find any packages matching your search. Try adjusting your query or category.
            </p>
            <button
              onClick={handleResetAll}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold text-xs shadow-md transition cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.08 }}
          >
            <AnimatePresence>
              {packages.map((pkg) => (
                <motion.div
                  key={pkg._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/30 dark:shadow-black/30 flex flex-col hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 justify-between"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-56 overflow-hidden bg-slate-100 dark:bg-slate-950">
                      <img
                        src={pkg.coverImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop'}
                        alt={pkg.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/20" />

                      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600/90 text-white backdrop-blur-md shadow-md">
                          {pkg.category}
                        </span>
                        {pkg.discountPrice && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-rose-500 text-white shadow-md">
                            SALE
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{pkg.ratingsAverage || 4.9}</span>
                        <span className="text-[10px] text-slate-300">({pkg.ratingsQuantity || 18})</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                          {pkg.durationDays} Days / {pkg.durationDays - 1} Nights
                        </span>
                        <div className="text-right">
                          <span className="text-lg font-black text-slate-900 dark:text-white">
                            ${pkg.discountPrice || pkg.price}
                          </span>
                          {pkg.discountPrice && (
                            <span className="text-xs text-slate-400 line-through ml-1.5">
                              ${pkg.price}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug line-clamp-1">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 text-xs font-bold truncate max-w-[55%]">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{pkg.destination}</span>
                      </div>

                      <button
                        onClick={() => dispatch(openBookingModal(pkg))}
                        className="text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 text-white shadow-md shadow-emerald-600/20 hover:scale-105 active:scale-95 transition cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Page <span className="font-bold text-slate-900 dark:text-white">{currentPage}</span> of{' '}
              <span className="font-bold text-slate-900 dark:text-white">{totalPages}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer">
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
                className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition cursor-pointer">
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>

              <div className="flex items-center gap-1 px-1">
                {getPageNumbers().map((p, idx) =>
                  p === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-xs text-slate-400 dark:text-slate-600">•••</span>
                  ) : (
                    <button
                      key={`page-${p}`}
                      onClick={() => handlePageChange(p as number)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs font-bold transition cursor-pointer ${
                        currentPage === p
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/25'
                          : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
              </div>

              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition cursor-pointer">
                Next <ChevronRight className="w-4 h-4" />
              </button>
              <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer">
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="flex justify-center pt-4">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold text-sm sm:text-base px-9 py-4 rounded-2xl shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-emerald-100" />
            <span>Explore All 100+ Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        pkg={selectedPkg}
        isOpen={bookingModalOpen}
        onClose={() => dispatch(closeBookingModal())}
      />
    </section>
  );
}