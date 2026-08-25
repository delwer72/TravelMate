"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
// আইকনের জন্য একটি টেম্পোরারি লোগো আইকন
import { LuMountain } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="p-2 border border-primary rounded-xl">
              <LuMountain className="text-primary text-xl" />
            </div>
            <Link href="/" className="text-2xl font-bold text-foreground">
              TravelMate
            </Link>
          </div>

          {/* Center Navigation Links (Pill shape background) */}
          <div className="hidden md:flex items-center bg-surface border border-border rounded-full px-6 py-2 space-x-6">
            <Link href="/destinations" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Explore
            </Link>
            <Link href="/trips" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Plan Trip
            </Link>
            <Link href="/reviews" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Reviews
            </Link>
          </div>

          {/* Right Auth Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="px-6 py-2.5 text-sm font-semibold text-background bg-foreground rounded-full hover:bg-gray-200 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-foreground focus:outline-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 space-y-4">
          <Link href="/destinations" className="block text-foreground font-medium" onClick={toggleMenu}>Explore</Link>
          <Link href="/trips" className="block text-foreground/70 font-medium" onClick={toggleMenu}>Plan Trip</Link>
          <Link href="/reviews" className="block text-foreground/70 font-medium" onClick={toggleMenu}>Reviews</Link>
          <hr className="border-border" />
          <Link href="/login" className="block text-foreground font-medium" onClick={toggleMenu}>Sign In</Link>
          <Link href="/register" className="block text-background bg-foreground px-4 py-2 rounded-full text-center font-bold" onClick={toggleMenu}>Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;