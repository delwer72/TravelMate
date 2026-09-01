import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest border border-emerald-500/20 mb-6">
          <span>Error 404</span>
        </div>

        <h1 className="text-6xl font-black tracking-tight sm:text-8xl bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Page Not Found
        </h1>

        <p className="mt-6 text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
          Sorry, the page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Link
            href="/"
            className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-500 hover:shadow-emerald-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 px-5 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}