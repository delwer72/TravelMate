"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Bell, 
  Search, 
  Plus, 
  Compass, 
  Sparkles,
  PlaneTakeoff 
} from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  role?: 'user' | 'admin' | 'guest';
  onActionClick?: () => void;
  actionLabel?: string;
}

export default function DashboardHeader({
  title,
  subtitle,
  role = 'user',
  onActionClick,
  actionLabel,
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {role === 'admin' ? 'Control Center' : role === 'guest' ? 'Guest Access' : 'Traveler Hub'}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {onActionClick && actionLabel && (
          <button
            onClick={onActionClick}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 transition flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> {actionLabel}
          </button>
        )}

        <Link
          href="/packages"
          className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-sm font-medium transition flex items-center gap-2 hover:text-white"
        >
          <Compass className="w-4 h-4 text-orange-400" /> Browse Tours
        </Link>
      </div>
    </div>
  );
}
