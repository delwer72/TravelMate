"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Globe2,
  Users,
  Award,
  ChevronDown,
  Plane,
  Compass,
  ArrowRight
} from 'lucide-react';

/* ─── Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: 'easeOut' },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

/* ─── Animated counter ─── */
function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <h3
      ref={ref}
      className={`text-3xl sm:text-4xl font-extrabold text-emerald-500 dark:text-emerald-400 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {target}
    </h3>
  );
}

/* ─── InView wrapper ─── */
function InViewSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does TravelMate verify travel packages and local guides?",
      a: "Every tour package on TravelMate is vetted by our destination scouting team. We partner strictly with licensed local tour operators, certified alpine/safari guides, and eco-certified accommodations."
    },
    {
      q: "What is the cancellation and refund policy?",
      a: "We offer 100% full refunds on cancellations made up to 7 days before your scheduled departure date. You can cancel instantly with one click from your traveler dashboard."
    },
    {
      q: "Are international flights included in the package prices?",
      a: "Our tour packages focus on on-the-ground experiences, boutique hotels, high-speed rail/scenic trains, all meals, and private park transfers. International flights are booked separately, though our travel concierge can assist you with flight booking."
    },
    {
      q: "Can I customize a package for a private family or corporate group?",
      a: "Absolutely! We offer private departures and bespoke itinerary customizations for groups of 4 or more travelers. Contact our concierge team via the traveler dashboard."
    }
  ];

  const team = [
    {
      name: "Marcus Vance",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bio: "Former National Geographic expedition leader who visited 84 countries before founding TravelMate."
    },
    {
      name: "Elena Rostova",
      role: "Chief of Travel Curation",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      bio: "Luxury hospitality expert focusing on cultural immersion, sustainable tourism, and boutique stays."
    },
    {
      name: "Tariq Mansour",
      role: "Head of Safety & Logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "20 years orchestrating high-altitude trekking logistics and wildlife safari operations across Africa and South America."
    }
  ];

  const stats = [
    { value: '50K+', label: 'Happy Travelers', accent: true },
    { value: '120+', label: 'Curated Destinations', accent: false },
    { value: '4.95', label: 'Average Rating', accent: true },
    { value: '24/7', label: 'Concierge Support', accent: true },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Verified Local Partners',
      desc: 'We never outsource to third-party resellers. Every single guide, vehicle, and hotel is directly inspected and contracted by our regional teams.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Sustainable & Ethical',
      desc: 'A portion of every booking funds community-led reforestation projects and empowers women-owned indigenous craft collectives.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Zero Hidden Surcharges',
      desc: 'Transparent pricing with all national park permits, local taxes, and breakfast buffets included in your headline price.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16 pb-16">

      {/* ── Hero ── */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative rounded-3xl bg-gradient-to-br from-emerald-50/80 via-teal-50/30 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-emerald-100/80 dark:border-slate-800 p-8 sm:p-14 overflow-hidden shadow-xl shadow-emerald-500/5 dark:shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-600/20 uppercase tracking-wider"
          >
            <Globe2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Our Journey &amp; Purpose
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Crafting Immersive Journeys for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
              Curious Explorers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            TravelMate was founded on a simple belief: travel should be effortless, authentic, and transformative. We bridge the gap between global adventurers and local storytellers to create memories that endure for a lifetime.
          </motion.p>
        </div>
      </motion.div>

      {/* ── Stats ── */}
      <InViewSection>
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={scaleIn}
              custom={i}
              whileHover={{ scale: 1.04, y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center cursor-default"
            >
              <h3
                className={`text-3xl sm:text-4xl font-extrabold ${
                  s.accent ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-900 dark:text-white'
                }`}
              >
                {s.value}
              </h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </InViewSection>

      {/* ── Core Values ── */}
      <InViewSection>
        <motion.div variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              What Sets TravelMate Apart
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              We hold ourselves to the highest standards of safety, environmental stewardship, and traveler satisfaction.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -8px rgba(16,185,129,0.1)' }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{v.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </InViewSection>

      {/* ── Team ── */}
      <InViewSection>
        <motion.div variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Meet Our Expedition Leaders
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              The passionate team working 24/7 to craft your dream vacations
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4 cursor-default"
              >
                <motion.img
                  src={m.image}
                  alt={m.name}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 rounded-2xl object-cover mx-auto ring-2 ring-emerald-600/30"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{m.name}</h4>
                  <p className="text-xs text-emerald-500 dark:text-emerald-400 font-medium">{m.role}</p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{m.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </InViewSection>

      {/* ── FAQ ── */}
      <InViewSection className="max-w-3xl mx-auto w-full">
        <motion.div variants={stagger} className="space-y-6">
          <motion.div variants={fadeUp} className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Everything you need to know before booking your journey
            </p>
          </motion.div>

          <motion.div variants={stagger} className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 dark:text-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800/60 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </InViewSection>

      {/* ── CTA ── */}
      <InViewSection>
        <motion.div
          variants={scaleIn}
          whileHover={{ scale: 1.01 }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-emerald-200/70 dark:border-slate-800 text-center space-y-4 shadow-xl shadow-emerald-500/5 dark:shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight"
            >
              Ready to Start Your Next Story?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Browse our collection of handpicked packages and secure your spots with flexible cancellation.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition cursor-pointer duration-200"
                >
                  <Compass className="w-4 h-4 text-emerald-100" /> Explore All Packages
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </InViewSection>
    </div>
  );
}
