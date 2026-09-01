"use client";

import React from "react";
import { Award, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function BestServiceBanner() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100/70 via-emerald-50/20 to-slate-50/50 dark:from-slate-900/60 dark:via-emerald-950/10 dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden flex flex-col items-center justify-center text-center border-y border-slate-200/60 dark:border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
      >
        
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" /> Uncompromising Excellence
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          We Always Deliver <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
            Exceptional Travel Experiences
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          From first-class safety standards to customized concierge arrangements, our worldwide team is dedicated to exceeding your highest expectations every step of the journey.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 w-full max-w-2xl">
          {[
            { icon: ShieldCheck, text: "100% Insured & Safe", color: "text-emerald-500" },
            { icon: Clock, text: "24/7 Global Concierge", color: "text-teal-500" },
            { icon: HeartHandshake, text: "Best Price Guarantee", color: "text-emerald-500" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm cursor-default"
              >
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span>{item.text}</span>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
