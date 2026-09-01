"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@heroui/react";
import { ThemeToggle } from "@/components/theme-toggle";

type UserRole = "guest" | "user" | "admin";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { user, logout } = useAuth();

  const handleSignOut = () => {
    logout();
  };

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Packages",
      href: "/packages",
    },
  ];

  const dashboardLinks: Record<UserRole, string> = {
    guest: "/dashboard/guest",
    user: "/dashboard/user",
    admin: "/dashboard/admin",
  };

  if (user?.email) {
    navLinks.push({
      label: "Dashboard",
      href: dashboardLinks[(user.role as UserRole) ?? "guest"],
    });
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-1.5">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white font-black text-base shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              TM
            </span>
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Travel<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Mate</span>
            </h2>
          </div>
        </Link>

        {/* MOBILE MENU BUTTONS */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* RIGHT MENU - DESKTOP */}
        <div className="ml-auto hidden items-center justify-end gap-6 md:flex">

          {/* NAV LINKS */}
          <ul className="flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive 
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DIVIDER */}
          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800" />

          {/* AUTH */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
                Hi, {user.name || user.email}
              </span>

              <Button variant="danger" onClick={handleSignOut} className="rounded-xl text-xs font-semibold">
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/auth/signin"
                className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 transition"
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-4.5 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 hover:from-emerald-700 hover:to-teal-600 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          )}

          {/* THEME TOGGLE */}
          <ThemeToggle />
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-zinc-200 dark:border-zinc-800 bg-background px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-3">

            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block transition ${
                      isActive 
                        ? "text-emerald-600 dark:text-emerald-400 font-semibold" 
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <div className="my-2 h-px bg-zinc-200 dark:bg-zinc-800" />

            {user ? (
              <>
                <li className="text-sm text-zinc-700 dark:text-zinc-300">
                  Hi, {user.name || user.email}
                </li>

                <li>
                  <Button
                    variant="danger"
                    onClick={handleSignOut}
                    className="w-full"
                  >
                    Sign Out
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/auth/signin"
                    onClick={() => setIsOpen(false)}
                    className="block text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    Sign In
                  </Link>
                </li>

                <li>
                  <Link
                    href="/auth/signup"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 block rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-2 text-center text-white font-medium shadow-md shadow-emerald-600/20"
                  >
                    Get Started
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}