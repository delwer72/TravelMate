"use client";

import React from 'react';
import Image from 'next/image';
import { 
  MousePointerClick, 
  CreditCard, 
  Plane, 
  Leaf, 
  Map, 
  Send, 
  Heart, 
  Building2,
  Sparkles,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface StepItem {
  id: number;
  icon: React.ElementType;
  gradient: string;
  iconBg: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    icon: MousePointerClick,
    gradient: 'from-emerald-500 to-teal-400',
    iconBg: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    title: 'Choose Your Dream Destination',
    description: 'Browse through 100+ vetted itineraries with verified local guides and all-inclusive transparent pricing.',
  },
  {
    id: 2,
    icon: CreditCard,
    gradient: 'from-teal-500 to-cyan-400',
    iconBg: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30',
    title: 'Instant & 100% Secure Booking',
    description: 'Lock in your spots with our flexible 24h cancellation guarantee and bank-grade encrypted checkout.',
  },
  {
    id: 3,
    icon: Plane,
    gradient: 'from-cyan-500 to-sky-400',
    iconBg: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
    title: 'Pack Your Bags & Explore',
    description: 'Meet your dedicated 24/7 concierge and expert naturalists at your destination for a seamless vacation.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function BookingSteps() {
  return (
    <section className="bg-slate-50/70 dark:bg-slate-950/80 py-24 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center max-w-2xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Easy & Effortless
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Book Your Next Trip in 3 Easy Steps
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Planning a once-in-a-lifetime expedition has never been simpler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: 3 Steps */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id} 
                  variants={itemVariants}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group relative flex items-start gap-5 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${step.iconBg} border flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Step 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column: Card & Overlay Card */}
          <motion.div 
            className="lg:col-span-6 relative flex justify-center lg:justify-end mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Background Glow */}
            <div className="absolute -top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Main Destination Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 rounded-3xl p-5 shadow-2xl shadow-slate-300/50 dark:shadow-black/60 w-full max-w-sm relative">
              {/* Trip Image */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop"
                  alt="Trip to Greece"
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                  Santorini, Greece
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white">
                  10 Days Tour
                </span>
              </div>

              {/* Trip Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Aegean Sun & Caldera</h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    14-24 Oct <span className="mx-1">|</span> Guided by Elena Vance
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-emerald-600 dark:text-emerald-400">$1,299</span>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-2.5 my-4">
                <span className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300" title="Eco-friendly">
                  <Leaf className="w-4 h-4 text-emerald-500" />
                </span>
                <span className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300" title="Full Map Included">
                  <Map className="w-4 h-4 text-teal-500" />
                </span>
                <span className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300" title="Private Transfers">
                  <Send className="w-4 h-4 text-cyan-500" />
                </span>
              </div>

              {/* Footer Stat */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
                  <Building2 className="w-4 h-4 text-emerald-500" />
                  <span>24 explorers joined</span>
                </div>
                <span className="text-rose-500">
                  <Heart className="w-5 h-5 fill-rose-500/20" />
                </span>
              </div>

              {/* Floating Overlay Card (Ongoing Trip) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-2 sm:-right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 shadow-2xl flex items-start gap-3.5 w-64"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                  <Image
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=200&auto=format&fit=crop"
                    alt="Trip to Rome"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-500" /> Trip Confirmed
                  </p>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Rome Grand Tour
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" /> In 12 days
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

