import React from "react";
import Link from "next/link";

// Custom Inline SVG icons
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
      { label: "Airline fees", href: "#" },
      { label: "Airline", href: "#" },
      { label: "Low fare tips", href: "#" },
    ],
  },
];

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-slate-100/80 dark:bg-slate-950 px-6 py-16 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 md:px-12 lg:px-20">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white font-black text-base shadow-md shadow-emerald-500/20">
                TM
              </span>
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                Travel<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Mate</span>
              </h2>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Book your dream expeditions in minutes with guaranteed inclusions, vetted guides, and 24/7 concierge support.
            </p>
          </div>

          {/* Dynamic Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2 flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{col.title}</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-slate-900 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials & App Downloads (Expanded span to prevent button clipping) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-200 shadow-md transition-all hover:scale-105 hover:bg-slate-300 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                <FacebookIcon size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 text-white shadow-md transition-transform hover:scale-105"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-200 shadow-md transition-all hover:scale-105 hover:bg-slate-300 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                <TwitterIcon size={16} />
              </a>
            </div>

            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Discover our app</p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap lg:flex-wrap xl:flex-nowrap items-center gap-2.5">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-2.5 rounded-2xl bg-white dark:bg-slate-900 px-4 py-2.5 border border-slate-200 dark:border-slate-700 transition-all hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:shadow-md hover:scale-[1.02] shadow-sm shrink-0 group"
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186C3.243 21.907 3 21.442 3 20.887V3.113c0-.555.243-1.02.609-1.299z" />
                  <path fill="#34A853" d="M17.256 8.536l-3.464 3.464 3.464 3.464 3.844-2.184c.884-.502.884-1.318 0-1.82l-3.844-2.924z" />
                  <path fill="#EA4335" d="M13.792 12L3.609 1.814c.266-.202.613-.284.977-.077l12.67 7.202-3.464 3.061z" />
                  <path fill="#FBBC05" d="M13.792 12l3.464 3.061-12.67 7.202c-.364.207-.711.125-.977-.077L13.792 12z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[7.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">GET IT ON</p>
                  <p className="text-[11px] font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">Google Play Store</p>
                </div>
              </a>

              {/* Apple Store */}
              <a
                href="#"
                className="flex items-center gap-2.5 rounded-2xl bg-white dark:bg-slate-900 px-4 py-2.5 border border-slate-200 dark:border-slate-700 transition-all hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:shadow-md hover:scale-[1.02] shadow-sm shrink-0 group"
              >
                <svg className="h-5 w-5 shrink-0 fill-current text-slate-800 dark:text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.81 1.44-.61.71-1.15 1.86-1.01 2.96 1.07.08 2.16-.55 2.83-1.36z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[7.5px] font-medium tracking-wider text-slate-400 dark:text-slate-500 uppercase">Available on the</p>
                  <p className="text-[11px] font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">Apple Store</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-xs text-slate-500 border-t border-slate-200 dark:border-slate-900 pt-8">
          <p>
            © {currentYear} <span className="font-semibold text-slate-700 dark:text-slate-200">TravelMate</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}