import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Destination {
  id: number;
  title: string;
  spots: string;
  duration: string;
  image: string;
  href: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: 'Thailand',
    spots: '20+ Spots',
    duration: '2D & 3N',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 2,
    title: 'Indonesia',
    spots: '25+ Spots',
    duration: '3D & 3N',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 3,
    title: 'New Zealand',
    spots: '20+ Spots',
    duration: '3D & 2N',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
    href: '#',
  },
];

export default function PopularDestinationsDark() {
  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight text-slate-100 mb-12 sm:mb-16">
          Our Popular Destinations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Map Vector Section */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg aspect-[1.8/1]">
              {/* World Map SVG Background */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full fill-slate-800/80 opacity-60"
              >
                <path d="M150,150 Q200,100 250,160 T350,180 T250,280 T150,220 Z M450,120 Q550,80 650,130 T750,180 T650,300 T480,240 Z M750,320 Q850,300 900,360 T800,440 T720,380 Z M220,320 Q300,310 320,380 T240,460 T180,390 Z" />
              </svg>

              {/* Map Location Pin 1 (Middle East) */}
              <div className="absolute top-[52%] left-[22%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute w-6 h-6 rounded-full bg-blue-500/30 animate-ping" />
                <span className="w-3.5 h-3.5 rounded-full bg-blue-400 border-2 border-slate-950 shadow-md shadow-blue-500/50" />
              </div>

              {/* Map Location Pin 2 (Southeast Asia) */}
              <div className="absolute top-[68%] left-[28%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute w-6 h-6 rounded-full bg-blue-500/30 animate-ping" />
                <span className="w-3.5 h-3.5 rounded-full bg-blue-400 border-2 border-slate-950 shadow-md shadow-blue-500/50" />
              </div>

              {/* Map Location Pin 3 (Australia/NZ) */}
              <div className="absolute top-[87%] left-[39%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute w-6 h-6 rounded-full bg-blue-500/30 animate-ping" />
                <span className="w-3.5 h-3.5 rounded-full bg-blue-400 border-2 border-slate-950 shadow-md shadow-blue-500/50" />
              </div>
            </div>
          </div>

          {/* Destination Cards Section */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {destinations.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800/80 shadow-lg shadow-black/20 hover:border-slate-700 hover:shadow-black/40 transition-all duration-300"
              >
                {/* Thumbnail Image */}
                <div className="relative w-28 sm:w-36 h-24 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-slate-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Container */}
                <div className="flex-1 flex items-center justify-between pr-2 sm:pr-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 sm:gap-10">
                    <div className="text-right sm:text-left text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                      <p>{item.spots}</p>
                      <p>{item.duration}</p>
                    </div>

                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-100 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}