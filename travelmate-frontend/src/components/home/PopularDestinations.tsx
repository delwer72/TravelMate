"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ChevronRight, MapPin, Compass, Star, Clock } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Dynamically import the map — no SSR (Leaflet requires window)
const DestinationsMap = dynamic(() => import('./DestinationsMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[360px] rounded-3xl bg-slate-900 animate-pulse flex items-center justify-center">
      <div className="text-slate-600 text-sm font-medium">Loading map…</div>
    </div>
  ),
});

interface Destination {
  id: number;
  title: string;
  country: string;
  spots: string;
  duration: string;
  image: string;
  price: string;
  href: string;
  lat: number;
  lng: number;
  rating: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: 'Phuket & Phi Phi Islands',
    country: 'Thailand',
    spots: '20+ Spots',
    duration: '5 Days / 4 Nights',
    price: '$799',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
    href: '/packages',
    lat: 7.9519,
    lng: 98.3381,
  },
  {
    id: 2,
    title: 'Bali Cultural Sanctuary',
    country: 'Indonesia',
    spots: '25+ Spots',
    duration: '7 Days / 6 Nights',
    price: '$950',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
    href: '/packages',
    lat: -8.3405,
    lng: 115.092,
  },
  {
    id: 3,
    title: 'South Island Fjords & Alps',
    country: 'New Zealand',
    spots: '18+ Spots',
    duration: '8 Days / 7 Nights',
    price: '$1,420',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
    href: '/packages',
    lat: -44.6646,
    lng: 168.3441,
  },
  {
    id: 4,
    title: 'Serengeti Safari Circuit',
    country: 'Tanzania',
    spots: '12+ Spots',
    duration: '9 Days / 8 Nights',
    price: '$2,100',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
    href: '/packages',
    lat: -2.3333,
    lng: 34.8333,
  },
  {
    id: 5,
    title: 'Swiss Alpine Glacier Trek',
    country: 'Switzerland',
    spots: '15+ Spots',
    duration: '6 Days / 5 Nights',
    price: '$1,890',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop',
    href: '/packages',
    lat: 46.8182,
    lng: 8.2275,
  },
  {
    id: 6,
    title: 'Maldives Overwater Escape',
    country: 'Maldives',
    spots: '10+ Spots',
    duration: '5 Days / 4 Nights',
    price: '$2,450',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop',
    href: '/packages',
    lat: 3.2028,
    lng: 73.2207,
  },
  {
    id: 7,
    title: 'Patagonia End of the World',
    country: 'Argentina',
    spots: '14+ Spots',
    duration: '10 Days / 9 Nights',
    price: '$1,650',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format&fit=crop',
    href: '/packages',
    lat: -50.9423,
    lng: -73.4068,
  },
];

/* ─── Variants ─── */
const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function PopularDestinations() {
  const [activeId, setActiveId] = useState<number>(1);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  // Auto-rotate active destination
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => {
        const idx = destinations.findIndex((d) => d.id === prev);
        return destinations[(idx + 1) % destinations.length].id;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const activeDestination = destinations.find((d) => d.id === activeId)!;
  const visibleDestinations = destinations.slice(0, visibleCount);

  // Build map-compatible destination list
  const mapDests = destinations.map((d) => ({
    id: d.id,
    title: d.title,
    country: d.country,
    lat: d.lat,
    lng: d.lng,
    price: d.price,
    color: '#10b981',
    active: d.id === activeId,
  }));

  return (
    <section className="bg-slate-50/70 dark:bg-slate-950/80 py-24 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">

        {/* ── Section Heading ── */}
        <motion.div
          className="text-center space-y-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> Trending Escapes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Our Popular Destinations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Iconic landmarks, secluded islands, and breathtaking natural wonders ready for your next departure.
          </p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Left: Real Map ── */}
          <motion.div
            className="lg:col-span-6 space-y-4"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            {/* Map container */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/20 dark:shadow-black/50" style={{ height: '440px' }}>
              <DestinationsMap
                destinations={mapDests}
                activeId={activeId}
                onPinClick={(id) => setActiveId(id)}
              />
              {/* Active destination overlay at bottom of map */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/10 shadow-2xl"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/15">
                    <Image
                      src={activeDestination.image}
                      alt={activeDestination.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {activeDestination.country}
                    </p>
                    <p className="text-white text-sm font-bold truncate">{activeDestination.title}</p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> {activeDestination.duration}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {activeDestination.rating}
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-slate-400 block font-medium">From</span>
                    <span className="text-emerald-400 font-black text-lg">{activeDestination.price}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 pt-1">
              {destinations.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveId(d.id)}
                  title={d.country}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    activeId === d.id
                      ? 'w-7 h-2 bg-gradient-to-r from-emerald-500 to-teal-400 shadow-sm'
                      : 'w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-emerald-400 dark:hover:bg-emerald-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Right: Destination Cards ── */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {visibleDestinations.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    className="mb-3"
                  >
                    <div
                      onClick={() => setActiveId(item.id)}
                      className={`group relative flex items-center gap-4 p-4 rounded-3xl cursor-pointer border transition-all duration-300 ${
                        isActive
                          ? 'bg-white dark:bg-slate-900 border-emerald-500/50 shadow-xl shadow-emerald-500/10 dark:shadow-emerald-500/5'
                          : 'bg-white/80 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 hover:border-emerald-400/40 hover:shadow-lg'
                      }`}
                    >
                      {/* Active bar */}
                      {isActive && (
                        <motion.div
                          layoutId="active-bar"
                          className="absolute left-0 top-4 bottom-4 w-1.5 rounded-r-full bg-gradient-to-b from-emerald-500 to-teal-400"
                        />
                      )}

                      {/* Thumbnail */}
                      <div className="relative w-28 h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-800">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="112px"
                          className={`object-cover transition-transform duration-500 ease-out ${isActive ? 'scale-105' : 'group-hover:scale-110'}`}
                        />
                        <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/60 backdrop-blur-sm text-white">
                          {item.price}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{item.country}</span>
                        </div>

                        <h3 className={`text-base font-bold transition-colors truncate ${
                          isActive
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                        }`}>
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <span className="font-medium text-slate-700 dark:text-slate-300">{item.spots}</span>
                          <span>•</span>
                          <span>{item.duration}</span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5 font-bold text-amber-500 dark:text-amber-400">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            {item.rating}
                          </span>
                        </div>
                      </div>

                      {/* Arrow Button */}
                      <Link
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-emerald-600 group-hover:text-white'
                        }`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Show more / less */}
            {destinations.length > 3 && (
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onClick={() =>
                  setVisibleCount((prev) => (prev >= destinations.length ? 3 : destinations.length))
                }
                className="w-full py-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer"
              >
                {visibleCount >= destinations.length
                  ? '↑ Show fewer destinations'
                  : `↓ Show ${destinations.length - visibleCount} more destinations`}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}