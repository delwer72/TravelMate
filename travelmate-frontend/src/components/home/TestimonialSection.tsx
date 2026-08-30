'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  bgImage: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jeo Stanlee',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100 mb-16 sm:mb-20 tracking-tight">
          What People Say About Us
        </h2>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Peeking Card (Decorative preview) */}
          <div className="hidden lg:block absolute -left-28 w-72 h-80 rounded-3xl overflow-hidden opacity-20 blur-[1px] pointer-events-none transform -rotate-3 scale-90 border border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
              alt="Previous preview"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Main Card Container */}
          <div className="relative w-full max-w-4xl">
            {/* Background Image Card */}
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80">
              <Image
                src={current.bgImage}
                alt={current.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
            </div>

            {/* Overlapping Floating Quote Card */}
            <div className="absolute left-1/2 -bottom-16 sm:-bottom-20 -translate-x-1/2 w-[90%] sm:w-[82%] max-w-xl bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 border border-slate-800/80 transition-all duration-300">
              {/* Overlapping Avatar */}
              <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-slate-900 overflow-hidden shadow-xl ring-2 ring-slate-800">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              {/* Quote Content */}
              <div className="pt-8 sm:pt-10 text-center">
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-md mx-auto">
                  {current.quote}
                </p>
                <h4 className="mt-4 text-sm sm:text-base font-bold text-slate-100">
                  -{current.name}
                </h4>
              </div>
            </div>
          </div>

          {/* Right Navigation Controls */}
          <div className="absolute right-2 sm:right-6 md:right-12 lg:right-16 z-10 flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 shadow-xl backdrop-blur-sm transition-all duration-200 hover:scale-105"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 shadow-xl backdrop-blur-sm transition-all duration-200 hover:scale-105"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Peeking Card (Decorative preview) */}
          <div className="hidden lg:block absolute -right-28 w-72 h-80 rounded-3xl overflow-hidden opacity-20 blur-[1px] pointer-events-none transform rotate-3 scale-90 border border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
              alt="Next preview"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center gap-2 mt-28 sm:mt-28">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-emerald-500 shadow-md shadow-emerald-500/30'
                  : 'w-2.5 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}