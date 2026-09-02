"use client";

import React from 'react';
import { Calendar, Users, MapPin, Award, LucideIcon, Sparkles, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface StatItem {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
  highlight: string;
  gradient: string;
  glow: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    icon: Calendar,
    value: '15+',
    label: 'Years of Excellence',
    highlight: 'Curating world-class journeys',
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'rgba(16, 185, 129, 0.2)',
  },
  {
    id: 2,
    icon: Users,
    value: '50k+',
    label: 'Delighted Explorers',
    highlight: 'With 99.4% satisfaction rate',
    gradient: 'from-teal-500 to-cyan-400',
    glow: 'rgba(20, 184, 166, 0.2)',
  },
  {
    id: 3,
    icon: MapPin,
    value: '650+',
    label: 'Destinations Visited',
    highlight: 'Across all 7 continents',
    gradient: 'from-cyan-500 to-sky-400',
    glow: 'rgba(6, 182, 212, 0.2)',
  },
  {
    id: 4,
    icon: Award,
    value: '4.95★',
    label: 'Global Rating',
    highlight: 'From 12,000+ verified reviews',
    gradient: 'from-amber-400 to-emerald-400',
    glow: 'rgba(245, 158, 11, 0.2)',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StatsSection() {
  return (
    <section className="bg-slate-50/50 dark:bg-slate-950/70 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-7 flex flex-col items-center justify-center text-center shadow-lg shadow-slate-200/30 dark:shadow-black/40 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Glowing top accent line */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Icon Container with glowing ring */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-slate-200 dark:border-slate-700/80 mb-4 group-hover:scale-110 group-hover:border-emerald-500/50 shadow-sm transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Stat Value with subtle gradient */}
                <h3 className={`text-3xl sm:text-4xl font-black tracking-tight mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </h3>

                {/* Stat Label */}
                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {stat.label}
                </p>

                {/* Small highlight */}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  {stat.highlight}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

