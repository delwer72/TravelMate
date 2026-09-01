"use client";

import { Suspense, useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
import { Eye, EyeSlash, At, ShieldKeyhole } from "@gravity-ui/icons";
import { useAuth } from "@/lib/auth-context";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Compass, MapPin, Star } from "lucide-react";

const TRUST_BADGES = [
  { icon: <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />, text: "4.95 avg. rating" },
  { icon: <MapPin className="w-3.5 h-3.5 text-emerald-400" />, text: "120+ destinations" },
  { icon: <Compass className="w-3.5 h-3.5 text-emerald-400" />, text: "50K+ travelers" },
];

function SigninForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo: string = searchParams.get("redirect") || "/";

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const toggleVisibility = (): void => setIsVisible((prev) => !prev);

  const handleSignin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const res = await login(email, password);

      if (res.error) {
        setError(res.error || "Invalid email or password.");
      } else {
        setSuccess("Signed in successfully! Redirecting...");
        setEmail("");
        setPassword("");

        const raw = localStorage.getItem("tm_auth_user");
        const authUser = raw ? JSON.parse(raw) : null;
        const role = authUser?.role || "user";

        if (redirectTo && redirectTo !== "/") {
          router.push(redirectTo);
        } else {
          router.push(
            role === "admin"
              ? "/dashboard/admin"
              : role === "user"
              ? "/dashboard/user"
              : "/dashboard/guest"
          );
        }
      }
    } catch (err) {
      setError("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirectTo && redirectTo !== "/" ? redirectTo : "/dashboard/user",
      });
    } catch (err) {
      console.error("Google sign in error", err);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* ── Left panel (decorative) ── */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hidden lg:flex flex-col justify-between w-[45%] relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-900 p-12"
      >
        {/* Glowing orbs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/40 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2">
          <span className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-black text-base border border-white/20">
            TM
          </span>
          <span className="text-white font-extrabold text-xl tracking-tight">TravelMate</span>
        </div>

        {/* Central copy */}
        <div className="relative z-10 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="text-4xl font-black text-white leading-tight"
          >
            Your next adventure <br />
            <span className="text-emerald-200">starts here.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-emerald-100/80 text-sm leading-relaxed max-w-xs"
          >
            Sign in to manage your bookings, explore curated packages, and connect with local guides across 120+ destinations.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {TRUST_BADGES.map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
              >
                {b.icon} {b.text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="relative z-10 text-xs text-emerald-200/60 italic"
        >
          &ldquo;The world is a book, and those who do not travel read only one page.&rdquo;
          <br /><span className="not-italic font-semibold text-emerald-200/80">— Saint Augustine</span>
        </motion.p>
      </motion.div>

      {/* ── Right panel (form) ── */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 flex items-center justify-center px-6 py-12 bg-white dark:bg-slate-950"
      >
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 justify-center">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white font-black text-sm">
              TM
            </span>
            <span className="text-slate-900 dark:text-white font-extrabold text-xl">TravelMate</span>
          </div>

          {/* Header */}
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="text-3xl font-black text-slate-900 dark:text-white tracking-tight"
            >
              Welcome back
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-500 dark:text-slate-400"
            >
              Enter your credentials to access your account
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            onSubmit={handleSignin}
            className="flex flex-col gap-5"
          >
            <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</Label>
              <InputGroup className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 rounded-xl px-3 bg-slate-50 dark:bg-slate-900 focus-within:border-emerald-500 transition-colors">
                <At className="text-slate-400 pointer-events-none" width={16} height={16} />
                <Input
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="w-full bg-transparent py-2.5 text-sm outline-none border-none text-slate-900 dark:text-slate-100"
                />
              </InputGroup>
            </TextField>

            <TextField isRequired name="password" className="flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</Label>
              <InputGroup className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 rounded-xl px-3 bg-slate-50 dark:bg-slate-900 focus-within:border-emerald-500 transition-colors">
                <ShieldKeyhole className="text-slate-400 pointer-events-none" width={16} height={16} />
                <Input
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  className="w-full bg-transparent py-2.5 text-sm outline-none border-none text-slate-900 dark:text-slate-100"
                />
                <button
                  className="focus:outline-none text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? <EyeSlash width={18} height={18} /> : <Eye width={18} height={18} />}
                </button>
              </InputGroup>
            </TextField>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3.5 text-xs font-medium rounded-xl bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900"
                >
                  <span className="font-semibold">Error:</span> {error}
                </motion.div>
              )}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3.5 text-xs font-medium rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900"
                >
                  <span className="font-semibold">Success:</span> {success}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full font-bold rounded-xl text-sm h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                isDisabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                      className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.div>

            <div className="text-center pt-4 border-t border-slate-100 dark:border-slate-800 mt-2 text-sm text-slate-600 dark:text-slate-400">
              New to TravelMate?{" "}
              <Link
                href={`/auth/signup?redirect=${encodeURIComponent(redirectTo)}`}
                className="font-medium cursor-pointer text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-500"
              >
                Create an account
              </Link>
            </div>
          </motion.form>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            <span className="text-xs text-slate-400">or continue with</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={handleGoogleSignIn}
              className="w-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold rounded-xl h-11 gap-2"
              variant="outline"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SigninPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
          className="w-8 h-8 border-2 border-emerald-200 border-t-emerald-600 rounded-full"
        />
      </div>
    }>
      <SigninForm />
    </Suspense>
  );
}