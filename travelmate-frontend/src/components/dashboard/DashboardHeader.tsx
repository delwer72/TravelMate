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
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80 mb-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {role === 'admin' ? 'Control Center' : role === 'guest' ? 'Guest Access' : 'Traveler Hub'}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {onActionClick && actionLabel && (
          <button
            onClick={onActionClick}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-emerald-600/20 transition flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> {actionLabel}
          </button>
        )}

        <Link
          href="/packages"
          className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium transition flex items-center gap-2 hover:text-slate-900 dark:hover:text-white shadow-sm"
        >
          <Compass className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> Browse Tours
        </Link>
      </div>
    </div>
  );
}
