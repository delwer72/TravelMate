"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center cursor-pointer"
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform rotate-0 scale-100 duration-300" />
      ) : (
        <Moon className="h-4 w-4 text-emerald-600 transition-transform rotate-0 scale-100 duration-300" />
      )}
    </button>
  );
}
