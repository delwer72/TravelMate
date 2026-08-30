'use client';

import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 text-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Decorative Plus-Grid (Bottom Right) */}
        <div className="absolute -bottom-10 -right-6 z-0 grid grid-cols-5 gap-3 text-xs font-bold select-none opacity-80 pointer-events-none">
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-orange-500/80">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>

          <span className="text-slate-700">+</span>
          <span className="text-indigo-400">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>

          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
          <span className="text-slate-700">+</span>
        </div>

        {/* Main Subscribe Card Container */}
        <div className="relative z-10 bg-slate-900/90 border border-slate-800/80 rounded-3xl sm:rounded-[40px] rounded-tl-[80px] sm:rounded-tl-[120px] p-8 sm:p-14 lg:p-16 shadow-2xl shadow-black/60 backdrop-blur-sm overflow-hidden">
          
          {/* Top-Right Floating Send Badge */}
          <div className="absolute -top-3 -right-3 sm:top-2 sm:right-2 z-20">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 -rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-300">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-emerald-500 ml-0.5" />
            </div>
          </div>

          {/* Background Concentric Circles (Bottom Left) */}
          <svg
            className="absolute -bottom-20 -left-20 w-80 h-80 opacity-15 pointer-events-none stroke-emerald-400"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="40" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" strokeWidth="1" />
            <circle cx="100" cy="100" r="80" strokeWidth="1" />
            <circle cx="100" cy="100" r="100" strokeWidth="1" />
          </svg>

          {/* Background Concentric Circles (Top Right) */}
          <svg
            className="absolute -top-20 -right-20 w-80 h-80 opacity-15 pointer-events-none stroke-emerald-400"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="40" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" strokeWidth="1" />
            <circle cx="100" cy="100" r="80" strokeWidth="1" />
            <circle cx="100" cy="100" r="100" strokeWidth="1" />
          </svg>

          {/* Card Body Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Header Text */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 leading-snug sm:leading-normal mb-8 sm:mb-10">
              Subscribe to get information, latest news and other interesting offers about Cobham
            </h3>

            {/* Input & Button Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
            >
              {/* Email Input Field */}
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-600/25 shrink-0 transition-all duration-200 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}