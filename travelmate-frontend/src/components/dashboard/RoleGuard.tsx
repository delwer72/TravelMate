"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldAlert, Lock, ArrowLeft, UserCheck, Key } from 'lucide-react';

interface RoleGuardProps {
  currentRole: 'guest' | 'user' | 'admin';
  allowedRoles: ('guest' | 'user' | 'admin')[];
  children: React.ReactNode;
  onRoleSwitch?: (role: 'guest' | 'user' | 'admin') => void;
}

export default function RoleGuard({
  currentRole,
  allowedRoles,
  children,
  onRoleSwitch,
}: RoleGuardProps) {
  const router = useRouter();

  const isAuthorized = allowedRoles.includes(currentRole);

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-3xl bg-slate-900/95 border border-red-500/30 p-8 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 right-0 p-8 text-red-500/10 pointer-events-none">
          <ShieldAlert className="w-40 h-40" />
        </div>

        {/* Lock Icon */}
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto shadow-lg shadow-red-500/10 animate-bounce">
          <Lock className="w-8 h-8" />
        </div>

        <div className="space-y-2 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-wider inline-flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" /> 403 Forbidden
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Access Restricted</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            This dashboard area is strictly protected. Only accounts with the{' '}
            <span className="text-white font-bold">{allowedRoles.join(' or ').toUpperCase()}</span> role are permitted.
            Your current active role is <span className="text-emerald-400 font-bold">{currentRole.toUpperCase()}</span>.
          </p>
        </div>

        {/* Role Switcher helper */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-left space-y-3 relative z-10">
          <p className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Key className="w-4 h-4 text-emerald-400" /> Switch Role Sandbox Permission:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {(['user', 'admin', 'guest'] as const).map((r) => (
              <button
                key={r}
                onClick={() => {
                  if (onRoleSwitch) onRoleSwitch(r);
                  router.push(`/dashboard/${r}`);
                }}
                className={`py-2 text-xs font-bold rounded-xl transition uppercase ${
                  allowedRoles.includes(r)
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                    : 'bg-slate-850 hover:bg-slate-800 text-slate-400'
                }`}
              >
                {r} {allowedRoles.includes(r) && '✓'}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center relative z-10">
          <Link
            href={`/dashboard/${currentRole}`}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-sm font-semibold transition flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to My Dashboard
          </Link>
          <Link
            href="/auth/signin"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2"
          >
            Sign In with Different Account
          </Link>
        </div>
      </div>
    </div>
  );
}
