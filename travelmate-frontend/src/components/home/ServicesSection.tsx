"use client";

import React from "react";
import { Ticket, Hotel, Send, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

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
      title: "Fast Transit & Flight Booking",
      subtitle: "Effortless Connections",
      description:
        "Seamless booking for international flights, scenic high-speed rail, airport transfers, and private chauffeured vehicles worldwide.",
      icon: Ticket,
      gradient: "from-emerald-500 to-teal-400",
      iconBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      features: ["VIP Fast-Track Check-in", "Zero Cancellation Fees", "Multi-City Routing"],
      link: "/packages",
    },
    {
      title: "Luxury & Eco-Boutique Stays",
      subtitle: "Handpicked Comfort",
      description:
        "Handpicked eco-lodges, 5-star beachfront resorts, and authentic local boutique villas vetted for top comfort, sustainability, and hospitality.",
      icon: Hotel,
      gradient: "from-sky-500 to-cyan-400",
      iconBg: "bg-sky-500/10 text-sky-500 border-sky-500/20",
      features: ["Complimentary Breakfast & Spa", "Private Plunge Pools", "Eco-Certified Lodges"],
      link: "/packages",
    },
    {
      title: "Bespoke Tour Itineraries",
      subtitle: "Tailor-Made Wonders",
      description:
        "Custom tailor-made itineraries guided by licensed local naturalists, certified mountain guides, and expert cultural storytellers.",
      icon: Send,
      gradient: "from-teal-500 to-emerald-400",
      iconBg: "bg-teal-500/10 text-teal-500 border-teal-500/20",
      features: ["Private Certified Guides", "Flexible Custom Pace", "Secret Off-Beat Spots"],
      link: "/packages",
    },
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-slate-950/80 text-slate-900 dark:text-white relative overflow-hidden">
      {/* Subtle Mesh Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {/* Section Heading */}
        <motion.div 
          className="text-center space-y-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
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
                className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-black/40 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Border */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${service.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}>
                      <Icon className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1.5 transition-transform"
                  >
                    <span>Explore options</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

