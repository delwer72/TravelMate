"use client";

import React from "react";
import { Award, Clock, HeartHandshake, ShieldCheck, Headphones, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BestServiceBanner() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "100% Insured & Protected",
      desc: "Comprehensive journey coverage & flexible 24-hour cancellations",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Headphones,
      title: "24/7 Global Concierge",
      desc: "Live dedicated travel specialists assisting you anytime, anywhere",
      color: "text-teal-500",
      bg: "bg-teal-500/10 border-teal-500/20",
    },
    {
      icon: HeartHandshake,
      title: "Best Price & Value Guarantee",
      desc: "Transparent all-inclusive rates with zero hidden resort fees",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100/80 via-emerald-50/20 to-slate-50/70 dark:from-slate-900/50 dark:via-emerald-950/20 dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden flex flex-col items-center justify-center text-center border-y border-slate-200/60 dark:border-slate-800/80">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" /> Uncompromising Excellence
        </span>

        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            We Always Deliver <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300">
              Exceptional Travel Experiences
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From first-class safety standards to bespoke concierge arrangements, our worldwide team is dedicated to exceeding your highest expectations at every step.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 w-full">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-lg shadow-slate-200/30 dark:shadow-black/30 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-4 ${item.bg}`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline transition"
          >
            <span>Learn more about our trust & safety protocols</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </motion.div>
    </section>
  );
}

