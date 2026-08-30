'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface PackageItem {
  id: number;
  duration: string;
  price: string;
  description: string;
  location: string;
  image: string;
  href: string;
}

const categories: string[] = [
  'Hot Deals',
  'Backpack',
  'South Asia',
  'Honeymoon',
  'Europe',
  'More',
];

const packages: PackageItem[] = [
  {
    id: 1,
    duration: '3 Days, 2 Nights',
    price: '$500 / Person',
    description: 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 2,
    duration: '3 Days, 2 Nights',
    price: '$800 / Person',
    description: 'Enjoy the Shrines and blossoms here in this beautiful country',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 3,
    duration: '3 Days, 2 Nights',
    price: '$600 / Person',
    description: 'Explore the majestic mountains and landscapes day and nights',
    location: 'Mountains',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
    href: '#',
  },
];

export default function BestPackages() {
  const [activeCategory, setActiveCategory] = useState<string>('Hot Deals');

  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight text-slate-100 mb-8">
          Best Packages For You
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                    : 'bg-slate-800/90 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl shadow-black/20 flex flex-col hover:border-slate-700 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative w-full h-56">
                <Image
                  src={pkg.image}
                  alt={pkg.location}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-slate-300">{pkg.duration}</span>
                  <span className="text-slate-100">{pkg.price}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[40px]">
                  {pkg.description}
                </p>

                {/* Footer Link / Location */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-slate-200 text-sm font-bold">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{pkg.location}</span>
                  </div>

                  <Link
                    href={pkg.href}
                    className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}