"use client";

import React from 'react';
import { Calendar, Users, MapPin, Award, LucideIcon } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface StatItem {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
  highlight: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    icon: Calendar,
    value: '15+',
    label: 'Years of Experience',
    highlight: 'Curating world-class journeys',
  },
  {
    id: 2,
    icon: Users,
    value: '50k+',
    label: 'Delighted Travelers',
    highlight: 'With 99.4% satisfaction',
  },
  {
    id: 3,
    icon: MapPin,
    value: '650+',
    label: 'Destinations Visited',
    highlight: 'Across all 7 continents',
  },
  {
    id: 4,
    icon: Award,
    value: '4.95★',
    label: 'Global Rating',
    highlight: 'From 12,000+ real reviews',
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
    <section className="bg-slate-50/50 dark:bg-slate-950/60 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-7 flex flex-col items-center justify-center text-center shadow-lg shadow-slate-200/30 dark:shadow-black/30 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-colors duration-300 overflow-hidden"
              >
                {/* Subtle top accent bar on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="w-13 h-13 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Stat Value */}
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                  {stat.value}
                </h3>

                {/* Stat Label */}
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">
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
