"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Compass, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
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

export default function HeroSection(): React.JSX.Element {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 pb-16 md:pb-24">
      {/* Background Image with slow cinematic zoom */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Mountain waterfall canyon landscape"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay Gradient with subtle emerald tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-radial-at-c from-emerald-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Content Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Tag Pill */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Curated Expeditions & Bespoke Journeys</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-2xl leading-[1.1] sm:leading-[1.08]"
          variants={itemVariants}
        >
          Your Imagination Is <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 drop-shadow-lg">
            Your Only Limit
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl font-normal leading-relaxed tracking-wide drop-shadow"
          variants={itemVariants}
        >
          Discover handpicked destinations, authentic cultural experiences, and seamless travel logistics tailored exclusively for you.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all duration-200 cursor-pointer"
            >
              <Compass className="w-5 h-5 text-emerald-100" />
              <span>Discover Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-2xl transition-all duration-200 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Why TravelMate?</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div 
          className="pt-6 grid grid-cols-3 gap-4 sm:gap-12 text-white/80 border-t border-white/10 max-w-lg mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-black text-white">100+</p>
            <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Destinations</p>
          </div>
          <div className="text-center border-x border-white/10 px-2 sm:px-6">
            <p className="text-xl sm:text-2xl font-black text-emerald-400">4.95★</p>
            <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Top Rated</p>
          </div>
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-black text-white">24/7</p>
            <p className="text-[11px] sm:text-xs text-slate-300 font-medium">Support</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
