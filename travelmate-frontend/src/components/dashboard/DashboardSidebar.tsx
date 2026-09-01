"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import {
  LayoutDashboard,
  Compass,
  CalendarCheck,
  Package,
  BarChart3,
  Heart,
  Settings,
  Users,
  LogOut,
  Sparkles,
  Shield,
  UserCheck,
  Plane,
} from "lucide-react";

interface DashboardSidebarProps {
  /** Still accepted for backwards-compat but role is now sourced from useAuth */
  currentRole?: "user" | "admin" | "guest";
}

export default function DashboardSidebar({ currentRole: _ignored }: DashboardSidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  // Derive role from real auth; fall back to guest if not signed in
  const role: "user" | "admin" | "guest" = (user?.role as any) || "guest";

  const userNavItems = [
    { label: "My Overview",      href: "/dashboard/user",                  icon: LayoutDashboard },
    { label: "My Bookings",      href: "/dashboard/user?tab=bookings",     icon: CalendarCheck },
    { label: "Wishlist & Saved", href: "/dashboard/user?tab=wishlist",     icon: Heart },
    { label: "Explore Packages", href: "/packages",                         icon: Compass },
    { label: "Profile Settings", href: "/dashboard/user?tab=settings",     icon: Settings },
  ];

  const adminNavItems = [
    { label: "Admin Analytics",  href: "/dashboard/admin",                    icon: BarChart3 },
    { label: "Manage Packages",  href: "/dashboard/admin?tab=packages",       icon: Package },
    { label: "Manage Bookings",  href: "/dashboard/admin?tab=bookings",       icon: CalendarCheck },
    { label: "Registered Users", href: "/dashboard/admin?tab=users",          icon: Users },
    { label: "Explore Storefront", href: "/packages",                         icon: Compass },
  ];

  const guestNavItems = [
    { label: "Welcome Portal",   href: "/dashboard/guest",                    icon: Sparkles },
    { label: "Trending Tours",   href: "/packages",                           icon: Compass },
    { label: "Member Benefits",  href: "/dashboard/guest?tab=perks",          icon: Shield },
  ];

  const navItems =
    role === "admin" ? adminNavItems : role === "user" ? userNavItems : guestNavItems;

  const roleBadgeClass =
    role === "admin"
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      : role === "user"
      ? "bg-emerald-600/10 text-emerald-400 border-emerald-600/20"
      : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

  // First two letters of the user's name for the avatar
  const initials = user?.name
    ? user.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()
    : role === "admin" ? "AD" : role === "user" ? "TM" : "GU";

  return (
    <aside className="w-64 shrink-0 bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 p-5 flex flex-col justify-between hidden md:flex min-h-[calc(100vh-5rem)] rounded-2xl shadow-sm">
      <div className="space-y-6">
        {/* Branding + Role Badge */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center">
              <Plane className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Travel<span className="text-emerald-500 dark:text-emerald-400">Mate</span></span>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${roleBadgeClass}`}>
            {role}
          </span>
        </div>

        {/* Navigation links */}
        <div className="space-y-1">
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
            {role === "admin" ? "Administration" : role === "guest" ? "Guest Dashboard" : "Traveler Portal"}
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href.includes("?") &&
                  typeof window !== "undefined" &&
                  pathname + window.location.search === item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500/15 to-transparent text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-emerald-500 dark:text-emerald-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer — real user info + logout */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-emerald-500/20">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
              {user?.name || (role === "guest" ? "Visiting Guest" : "Traveler")}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {user?.email || "Sign in for full access"}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition group"
        >
          <LogOut className="w-3.5 h-3.5 group-hover:text-red-400" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
