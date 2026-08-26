import React from "react";
import Link from "next/link";

// Custom Inline SVG icons (No external icon package needed)
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Mobile", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Help/FAQ", href: "#" },
      { label: "Press", href: "#" },
      { label: "Affiliates", href: "#" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Airlinefees", href: "#" },
      { label: "Airline", href: "#" },
      { label: "Low fare tips", href: "#" },
    ],
  },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer className="relative w-full bg-slate-950 px-6 py-12 text-slate-100 md:px-16 lg:px-24 border-t border-slate-800">
      {/* Top Right Decorative Plus Icons */}
      <div className="absolute right-12 top-6 hidden text-slate-800 md:block text-xs tracking-[0.5em] select-none">
        + &nbsp; + &nbsp; + &nbsp; +
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Travel <br />
              <span className="font-extrabold text-indigo-400">Mate</span>
            </h2>
            <p className="max-w-xs text-xs leading-relaxed text-slate-400">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Dynamic Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-base font-bold text-white">{col.title}</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials & App Downloads */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-200 shadow-sm transition-all hover:scale-105 hover:bg-slate-700 hover:text-white"
              >
                <FacebookIcon size={18} />
              </button>

              <button
                type="button"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 text-white shadow-sm transition-transform hover:scale-105"
              >
                <InstagramIcon size={18} />
              </button>

              <button
                type="button"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-200 shadow-sm transition-all hover:scale-105 hover:bg-slate-700 hover:text-white"
              >
                <TwitterIcon size={16} />
              </button>
            </div>

            <p className="text-sm font-medium text-slate-400">Discover our app</p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-slate-800"
              >
                <svg className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.55.3-1.02.77-1.25L13.44 12 3.77 21.75c-.47-.23-.77-.7-.77-1.25zM14.86 13.41l3.39 3.39-12.8 7.39 9.41-10.78zM18.8 12l2.45 1.41c.54.31.54.83 0 1.14L18.8 16l-3.95-3.95L18.8 12zM3.77 2.25l12.8 7.39-3.39 3.39L3.77 2.25z" />
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase leading-none text-slate-400">GET IT ON</p>
                  <p className="text-xs font-semibold leading-tight">Google Play</p>
                </div>
              </a>

              {/* Apple Store */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-slate-800"
              >
                <svg className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.81 1.44-.61.71-1.15 1.86-1.01 2.96 1.07.08 2.16-.55 2.83-1.36z" />
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase leading-none text-slate-400">Available on the</p>
                  <p className="text-xs font-semibold leading-tight">Apple Store</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-xs text-slate-500">
          All rights reserved@travelgoo.co
        </div>
      </div>
    </footer>
  );
}