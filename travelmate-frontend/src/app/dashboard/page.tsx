"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function DashboardIndexPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!user) {
      router.push("/auth/signin");
      return;
    }
    // Redirect to role-appropriate dashboard
    if (user.role === "admin") router.push("/dashboard/admin");
    else if (user.role === "user") router.push("/dashboard/user");
    else router.push("/dashboard/guest");
  }, [user, isLoading, router]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center text-slate-400 text-sm">
      <svg className="animate-spin w-5 h-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
      </svg>
      Redirecting to your dashboard...
    </div>
  );
}
