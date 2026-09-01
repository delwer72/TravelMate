"use client";

import React from "react";
import { Ticket, Hotel, Send, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  const services = [
    {
      title: "Ticket & Transit Booking",
      description:
        "Seamless booking for international flights, scenic high-speed rail, and private transfers worldwide.",
      icon: Ticket,
      iconBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      glowColor: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
    },
    {
      title: "Luxury & Boutique Stays",
      description:
        "Handpicked eco-lodges, 5-star beachfront resorts, and authentic local boutique villas vetted for top comfort.",
      icon: Hotel,
      iconBg: "bg-sky-500/10 text-sky-500 border-sky-500/20",
      glowColor: "hover:border-sky-500/40 hover:shadow-sky-500/5",
    },
    {
      title: "Bespoke Tour Planning",
      description:
        "Custom tailor-made itineraries guided by licensed local naturalists and cultural storytellers.",
      icon: Send,
      iconBg: "bg-teal-500/10 text-teal-500 border-teal-500/20",
      glowColor: "hover:border-teal-500/40 hover:shadow-teal-500/5",
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-950/80 text-slate-900 dark:text-white relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <motion.div 
          className="text-center space-y-3 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Premium Services For Every Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Everything you need for an unforgettable, hassle-free expedition from departure to homecoming.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-black/40 transition-colors duration-300 flex flex-col justify-between ${service.glowColor}`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}>
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1.5 transition-transform">
                  <span>Learn more</span>
                  <span className="ml-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
