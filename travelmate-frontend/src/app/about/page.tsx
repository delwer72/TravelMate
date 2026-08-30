"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-14 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" /> Our Journey & Purpose
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Crafting Immersive Journeys for Curious Explorers
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            TravelMate was founded on a simple belief: travel should be effortless, authentic, and transformative. We bridge the gap between global adventurers and local storytellers to create memories that endure for a lifetime.
          </p>
        </div>
      </div>

      {/* Metrics Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-orange-400">50K+</h3>
          <p className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">Happy Travelers</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">120+</h3>
          <p className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">Curated Destinations</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-400">4.95</h3>
          <p className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">Average Rating</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-400">24/7</h3>
          <p className="text-xs font-semibold text-zinc-400 mt-1 uppercase tracking-wider">Concierge Support</p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What Sets TravelMate Apart</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            We hold ourselves to the highest standards of safety, environmental stewardship, and traveler satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Verified Local Partners</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We never outsource to third-party resellers. Every single guide, vehicle, and hotel is directly inspected and contracted by our regional teams.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Sustainable & Ethical</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              A portion of every booking funds community-led reforestation projects and empowers women-owned indigenous craft collectives.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero Hidden Surcharges</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Transparent pricing with all national park permits, local taxes, and breakfast buffets included in your headline price.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Meet Our Expedition Leaders</h2>
          <p className="text-xs sm:text-sm text-zinc-400">The passionate team working 24/7 to craft your dream vacations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 text-center space-y-4">
              <img
                src={m.image}
                alt={m.name}
                className="w-24 h-24 rounded-2xl object-cover mx-auto ring-2 ring-orange-500/30"
              />
              <div>
                <h4 className="font-bold text-white text-base">{m.name}</h4>
                <p className="text-xs text-orange-400 font-medium">{m.role}</p>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-zinc-400">Everything you need to know before booking your journey</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-orange-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-orange-600 to-amber-600 text-center space-y-4 shadow-2xl text-white">
        <h2 className="text-2xl sm:text-4xl font-black">Ready to Start Your Next Story?</h2>
        <p className="text-orange-100 max-w-xl mx-auto text-sm">
          Browse our collection of handpicked packages and secure your spots with flexible cancellation.
        </p>
        <div className="pt-2">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm shadow-xl transition"
          >
            <Compass className="w-4 h-4 text-orange-400" /> Explore All Packages
          </Link>
        </div>
      </div>
    </div>
  );
}
