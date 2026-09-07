"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Compass, AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard/user";
  const { setAuthFromResponse } = useAuth();

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    async function syncSession() {
      try {
        // Attempt session sync
        const res = await fetch("/api/auth/session-sync", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (!res.ok || !data.success || !data.token) {
          throw new Error(data.message || "Failed to authenticate session with Google.");
        }

        if (isMounted) {
          setStatus("success");
          setAuthFromResponse(data.token, data.user);

          // Route to intended destination based on role if default
          let target = redirectTo;
          if (!redirectTo || redirectTo === "/" || redirectTo === "/dashboard") {
            target =
              data.user.role === "admin"
                ? "/dashboard/admin"
                : data.user.role === "guest"
                ? "/dashboard/guest"
                : "/dashboard/user";
          }

          // Small pause for state update then navigate
          setTimeout(() => {
            router.replace(target);
          }, 300);
        }
      } catch (err: any) {
        if (isMounted) {
          console.error("OAuth callback sync failed:", err);
          setStatus("error");
          setErrorMessage(err?.message || "Google authentication failed. Please try again.");
        }
      }
    }

    syncSession();

    return () => {
      isMounted = false;
    };
  }, [redirectTo, router, setAuthFromResponse]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-8 rounded-2xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-xl shadow-2xl text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <Compass className="w-8 h-8 text-white animate-spin-slow" />
        </div>

        {status === "loading" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Completing Google Sign-in</h2>
            <p className="text-sm text-slate-400">
              Synchronizing your account and preparing your dashboard...
            </p>
            <div className="flex justify-center pt-2">
              <div className="w-8 h-8 border-3 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin" />
            </div>
          </div>
        )}

        {status === "success" && (
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-emerald-400">Sign-in Successful!</h2>
            <p className="text-sm text-slate-400">Redirecting you now...</p>
          </div>
        )}

        {status === "error" && (
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-2 text-rose-400 font-semibold">
              <AlertCircle className="w-5 h-5" />
              <span>Authentication Notice</span>
            </div>
            <p className="text-xs text-slate-300 bg-rose-950/40 border border-rose-800/40 rounded-xl p-3">
              {errorMessage}
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-medium text-sm flex items-center justify-center gap-2 transition"
              >
                <RefreshCw className="w-4 h-4" />
                Retry
              </button>
              <Link
                href="/auth/signin"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-sm font-medium text-slate-300 transition"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="w-8 h-8 border-3 border-emerald-500/30 border-t-emerald-400 rounded-full animate-spin" />
        </div>
      }
    >
      <CallbackHandler />
    </Suspense>
  );
}
