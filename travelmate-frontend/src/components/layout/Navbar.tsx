
"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";

type UserRole = "guest" | "user" | "admin";

type UserWithRole = {
  name?: string | null;
  email?: string | null;
  role?: UserRole;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();

  const user = session?.user as UserWithRole | undefined;

  const handleSignOut = async () => {
    await signOut();
  };

  const navLinks = [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Packages",
      href: "/Packages",
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
      href: dashboardLinks[user.role ?? "guest"],
    });
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Travel
              <span className="font-extrabold text-indigo-400">Mate</span>
            </h2>
          </div>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="text-white md:hidden"
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

        {/* RIGHT MENU - DESKTOP */}
        <div className="ml-auto hidden items-center justify-end gap-6 md:flex">

          {/* NAV LINKS */}
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* DIVIDER */}
          <div className="h-6 w-px bg-zinc-700" />

          {/* AUTH */}
          {user ? (
            <>
              <span className="text-sm text-zinc-300">
                Hi, {user.name || user.email}
              </span>

              <Button variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="text-sm text-violet-400 hover:text-violet-300"
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-zinc-800 px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-3">

            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-zinc-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <div className="my-2 h-px bg-zinc-800" />

            {user ? (
              <>
                <li className="text-sm text-zinc-300">
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
                    className="block text-violet-400"
                  >
                    Sign In
                  </Link>
                </li>

                <li>
                  <Link
                    href="/auth/signup"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 block rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-4 py-2 text-center text-white"
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