'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles, Zap, MapPin, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 4500);
  };

  return (
    <section className="bg-slate-50/50 dark:bg-slate-950/80 py-24 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-80 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Main Subscribe Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 rounded-3xl sm:rounded-[40px] p-8 sm:p-14 lg:p-16 shadow-2xl shadow-slate-300/40 dark:shadow-black/60 overflow-hidden"
        >
          
          {/* Top-Right Floating Send Badge */}
          <motion.div 
            animate={{ rotate: [6, -6, 6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-300">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-emerald-600 ml-0.5" />
            </div>
          </motion.div>

          {/* Card Body Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Stay in the Loop
            </span>

            {/* Header Text */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Subscribe to Receive Secret Deals & Exclusive Itineraries
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
              Join 50,000+ avid travelers getting weekly flight alerts, handpicked guides, and early access to group tours.
            </p>

            {/* Quick perk badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Flash Discounts
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Hidden Spots Guides
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                <Tag className="w-3.5 h-3.5 text-teal-500" /> VIP Early Bird Pass
              </span>
            </div>

            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-2 text-sm font-semibold max-w-md mx-auto"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Thank you for subscribing! Check your inbox soon for your welcome voucher.</span>
              </motion.div>
            ) : (
              /* Input & Button Form */
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto pt-2"
              >
                {/* Email Input Field */}
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 shadow-sm transition-all"
                  />
                </div>

                {/* Subscribe Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 shrink-0 transition-all duration-200 cursor-pointer"
                >
                  Subscribe
                </motion.button>
              </form>
            )}

            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              🔒 We respect your privacy. No spam ever. Unsubscribe with 1-click anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

