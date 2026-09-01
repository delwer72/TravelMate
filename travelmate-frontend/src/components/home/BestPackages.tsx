'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
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
import { getPackages, TourPackage } from '@/lib/api';
import BookingModal from '@/components/dashboard/BookingModal';


const categories: string[] = [
  'All',
  'Hot Deals',
  'Adventure',
  'Beach',
  'Cultural',
  'Luxury',
  'Mountain',
];

export default function BestPackages() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [appliedSearch, setAppliedSearch] = useState<string>('');
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPkg, setSelectedPkg] = useState<TourPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 6;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchPackages();
  }, [activeCategory, appliedSearch]);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      let params: any = {};
      if (activeCategory === 'Hot Deals') {
        params.sort = 'popular';
      } else if (activeCategory !== 'All') {
        params.category = activeCategory;
      }
      if (appliedSearch.trim()) {
        params.search = appliedSearch.trim();
      }

      const data = await getPackages(params);

      // Filter for hot deals if selected
      let filtered = data;
      if (activeCategory === 'Hot Deals') {
        filtered = data.filter((p) => p.discountPrice || p.featured);
      }

      setPackages(filtered);
      setCurrentPage(1); // Reset to page 1 on new search or category change
    } catch (err) {
      console.error('Failed to load home packages:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setAppliedSearch('');
  };

  const resetAllFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setAppliedSearch('');
  };

  // Pagination math
  const totalPackages = packages.length;
  const totalPages = Math.max(1, Math.ceil(totalPackages / pageSize));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedPackages = useMemo(() => {
    const start = (validCurrentPage - 1) * pageSize;
    return packages.slice(start, start + pageSize);
  }, [packages, validCurrentPage, pageSize]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === validCurrentPage) return;
    setCurrentPage(page);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate page numbers with ellipsis
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
    <section
      ref={sectionRef}
      className="bg-slate-50/50 dark:bg-slate-950/80 py-20 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        {/* Header Section */}
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
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-xl mx-auto pt-2 flex items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by country, destination, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-11 pr-10 py-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
              />
              {searchQuery && (
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
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition cursor-pointer shrink-0 hover:scale-105 active:scale-95 duration-200"
            >
              Search
            </button>
          </form>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/25 scale-105'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Results Counter & Filter Reset */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <p>
            Showing{' '}
            <span className="font-bold text-slate-900 dark:text-white">
              {totalPackages > 0 ? startRecord : 0}-{endRecord}
            </span>{' '}
            of <span className="font-bold text-emerald-600 dark:text-emerald-400">{totalPackages}</span> packages
            {appliedSearch && (
              <span>
                {' '}
                for &ldquo;<span className="text-slate-900 dark:text-white font-medium">{appliedSearch}</span>&rdquo;
              </span>
            )}
          </p>

          {(activeCategory !== 'All' || appliedSearch) && (
            <button
              onClick={resetAllFilters}
              className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 font-medium transition cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Reset Filters
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
        ) : paginatedPackages.length === 0 ? (
          <div className="text-center py-16 bg-white/60 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            <Compass className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">No packages found</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
              We couldn&apos;t find any packages matching your search. Try adjusting your query or category.
            </p>
            <button
              onClick={resetAllFilters}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold text-xs shadow-md transition cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          /* Package Cards Grid */
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {paginatedPackages.map((pkg) => (
              <motion.div
                key={pkg._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/30 dark:shadow-black/30 flex flex-col hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 transition-colors duration-300 justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-56 overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <img
                      src={
                        pkg.coverImage ||
                        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop'
                      }
                      alt={pkg.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                    {/* Category Badge */}
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600/90 text-white backdrop-blur-md shadow-md">
                      {pkg.category}
                    </span>

                    {/* Rating Pill */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {pkg.ratingsAverage} ({pkg.ratingsQuantity})
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    {/* Meta Header */}
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

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug line-clamp-1">
                      {pkg.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link / Location & Action */}
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 text-xs font-bold truncate max-w-[55%]">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{pkg.destination}</span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedPkg(pkg);
                        setIsBookingModalOpen(true);
                      }}
                      className="text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white shadow-md shadow-emerald-600/20 hover:scale-105 active:scale-95 transition cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Page <span className="font-bold text-slate-900 dark:text-white">{validCurrentPage}</span> of{' '}
              <span className="font-bold text-slate-900 dark:text-white">{totalPages}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {/* First Page */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={validCurrentPage === 1}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                title="First Page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {/* Previous Page */}
              <button
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-1 px-1">
                {getPageNumbers().map((p, idx) =>
                  p === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-xs text-slate-400 dark:text-slate-600">
                      •••
                    </span>
                  ) : (
                    <button
                      key={`page-${p}`}
                      onClick={() => handlePageChange(p as number)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs font-bold transition cursor-pointer ${
                        validCurrentPage === p
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/25'
                          : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
              </div>

              {/* Next Page */}
              <button
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>

              {/* Last Page */}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={validCurrentPage === totalPages}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                title="Last Page"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA Button */}
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
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}