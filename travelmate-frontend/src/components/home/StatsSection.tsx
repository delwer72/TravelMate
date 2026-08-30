import React from 'react';
import { Calendar, BarChart3, MapPin, RotateCcw, LucideIcon } from 'lucide-react';

interface StatItem {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    icon: Calendar,
    value: '15+',
    label: 'Years of Experience',
  },
  {
    id: 2,
    icon: BarChart3,
    value: '15k+',
    label: 'Happy Travellers',
  },
  {
    id: 3,
    icon: MapPin,
    value: '650+',
    label: 'Places Visited',
  },
  {
    id: 4,
    icon: RotateCcw,
    value: '2k+',
    label: 'Travel History',
  },
];

export default function StatsSectionDark() {
  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-slate-900 border border-slate-800/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-black/20 hover:border-emerald-500/30 hover:shadow-emerald-500/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-5 text-emerald-400">
                  <Icon className="w-8 h-8 stroke-[1.75]" />
                </div>

                {/* Stat Value */}
                <h3 className="text-3xl font-extrabold text-slate-100 tracking-tight mb-2">
                  {stat.value}
                </h3>

                {/* Stat Label */}
                <p className="text-sm font-medium text-slate-400 leading-snug max-w-[130px]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}