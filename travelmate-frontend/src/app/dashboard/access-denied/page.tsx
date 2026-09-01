"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, Lock, ArrowLeft } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function AccessDeniedPage() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-slate-950">
      <div className="w-full max-w-lg rounded-3xl bg-slate-900/95 border border-red-500/30 p-10 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        {/* Background icon */}
        <div className="absolute top-0 right-0 p-8 text-red-500/10 pointer-events-none">
          <ShieldAlert className="w-48 h-48" />
        </div>

        {/* Animated lock */}
        <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto shadow-lg shadow-red-500/10 animate-bounce">
          <Lock className="w-10 h-10" />
        </div>

        <div className="space-y-3 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-wider inline-flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            403 Forbidden
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Access Restricted
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            {user
              ? <>You are signed in as <span className="text-emerald-400 font-bold">{user.name}</span> with role <span className="text-emerald-400 font-bold uppercase">{user.role}</span>. This area requires a different permission level.</>
              : "You do not have permission to view this page."}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10 pt-2">
          <Link
            href={user ? `/dashboard/${user.role}` : "/"}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Go to My Dashboard
          </Link>
          <button
            onClick={logout}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-lg shadow-emerald-600/20 transition"
          >
            Sign In with Different Account
          </button>
        </div>
      </div>
    </div>
  );
}
