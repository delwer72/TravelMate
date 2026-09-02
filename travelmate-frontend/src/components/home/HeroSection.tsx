"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Star, 
  SlidersHorizontal,
  Flame
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const trendingTags = [
  { label: "Swiss Alps", query: "Swiss" },
  { label: "Bali Sanctuary", query: "Bali" },
  { label: "Santorini Sun", query: "Greece" },
  { label: "Patagonia Trek", query: "Patagonia" },
  { label: "Serengeti Safari", query: "Safari" },
];

export default function HeroSection(): React.JSX.Element {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("any");

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination.trim()) params.set("search", destination.trim());
    if (category !== "All") params.set("category", category);
    router.push(`/packages?${params.toString()}`);
  };

  const handleTagClick = (tagQuery: string) => {
    router.push(`/packages?search=${encodeURIComponent(tagQuery)}`);
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-20 md:pb-28">
      {/* Background Image with slow cinematic zoom */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Mountain waterfall canyon landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Modern Gradient Overlays & Radial Glows */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/40 -z-10" />
      <div className="absolute inset-0 bg-radial-at-c from-emerald-900/20 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Decorative Badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-32 left-12 z-20 items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md">
          <Star className="w-5 h-5 fill-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-white flex items-center gap-1">
            4.95 / 5.0 Rating <span className="text-amber-400">★★★★★</span>
          </p>
          <p className="text-[11px] text-slate-300">From 12,000+ real explorers</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute bottom-36 right-12 z-20 items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-emerald-300">100% Insured Bookings</p>
          <p className="text-[11px] text-slate-300">Flexible 24h cancellations</p>
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Tag Pill with live status */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/10 dark:bg-black/50 backdrop-blur-xl border border-white/20 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide shadow-2xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-white font-medium">Over 2,400+ explorers traveling right now</span>
            <span className="text-white/40">|</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Curated Expeditions
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-2xl leading-[1.1] sm:leading-[1.06]"
          variants={itemVariants}
        >
          Your Imagination Is <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 drop-shadow-lg">
            Your Only Limit
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-3xl font-normal leading-relaxed tracking-wide drop-shadow"
          variants={itemVariants}
        >
          Handpicked luxury expeditions, authentic local naturalists, and all-inclusive itineraries across all seven continents.
        </motion.p>

        {/* ── HIGH-CONVERTING INTERACTIVE SEARCH & BOOKING BAR ── */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-4xl pt-2"
        >
          <form 
            onSubmit={handleHeroSearch}
            className="p-3 sm:p-4 rounded-3xl sm:rounded-full bg-white/15 dark:bg-slate-950/80 backdrop-blur-2xl border border-white/25 shadow-2xl shadow-black/40 grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3 items-center"
          >
            {/* Destination Input */}
            <div className="sm:col-span-4 relative flex items-center bg-white/10 dark:bg-slate-900/60 rounded-2xl sm:rounded-full px-4 py-2.5 border border-white/10 text-left">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mr-2.5" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Where to?</label>
                <input
                  type="text"
                  placeholder="e.g. Kyoto, Bali, Alps..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none font-medium truncate"
                />
              </div>
            </div>

            {/* Experience Type Select */}
            <div className="sm:col-span-3 relative flex items-center bg-white/10 dark:bg-slate-900/60 rounded-2xl sm:rounded-full px-4 py-2.5 border border-white/10 text-left">
              <Compass className="w-4 h-4 text-teal-400 shrink-0 mr-2.5" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Experience</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none font-medium cursor-pointer [&>option]:bg-slate-900 [&>option]:text-white"
                >
                  <option value="All">All Experiences</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Beach">Beach & Island</option>
                  <option value="Cultural">Cultural & Heritage</option>
                  <option value="Luxury">Luxury & Stays</option>
                  <option value="Mountain">Mountain Trek</option>
                </select>
              </div>
            </div>

            {/* Duration Selector */}
            <div className="sm:col-span-3 relative flex items-center bg-white/10 dark:bg-slate-900/60 rounded-2xl sm:rounded-full px-4 py-2.5 border border-white/10 text-left">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0 mr-2.5" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none font-medium cursor-pointer [&>option]:bg-slate-900 [&>option]:text-white"
                >
                  <option value="any">Flexible Dates</option>
                  <option value="short">1 - 4 Days</option>
                  <option value="medium">5 - 8 Days</option>
                  <option value="long">9+ Days</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full h-12 sm:h-auto py-3 px-6 rounded-2xl sm:rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Explore</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Trending Quick-Tags */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-slate-300"
        >
          <span className="flex items-center gap-1 font-bold text-amber-400 mr-1">
            <Flame className="w-3.5 h-3.5" /> Trending:
          </span>
          {trendingTags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => handleTagClick(tag.query)}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-slate-200 hover:text-white transition duration-200 cursor-pointer"
            >
              #{tag.label}
            </button>
          ))}
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div 
          className="pt-6 grid grid-cols-3 gap-6 sm:gap-14 text-white/80 border-t border-white/15 max-w-lg mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white">120+</p>
            <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Bespoke Tours</p>
          </div>
          <div className="text-center border-x border-white/15 px-3 sm:px-8">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">99.4%</p>
            <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Happy Explorers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-cyan-300">24/7</p>
            <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Global Concierge</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

