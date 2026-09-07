"use client";

// src/lib/auth-context.tsx
// Thin wrapper over the Redux authSlice — keeps the existing useAuth() API
// intact so all existing consumers work without changes.

import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  initAuthThunk,
  loginThunk,
  logoutThunk,
  setCredentials,
  AuthUser,
} from "@/store/slices/authSlice";

// ─── Types ────────────────────────────────────────────────────────────────────

export type UserRole = "guest" | "user" | "admin";
export type { AuthUser };

interface AuthContextValue {
  user:               AuthUser | null;
  token:              string   | null;
  isLoading:          boolean;
  isAuthenticated:    boolean;
  login:              (email: string, password: string) => Promise<{ error?: string }>;
  logout:             () => void;
  setAuthFromResponse:(token: string, user: AuthUser) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const router   = useRouter();

  // Read state directly from Redux store
  const user            = useAppSelector((s) => s.auth.user);
  const token           = useAppSelector((s) => s.auth.token);
  const isLoading       = useAppSelector((s) => s.auth.isLoading);
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);

  // Hydrate auth on mount
  useEffect(() => {
    dispatch(initAuthThunk());
  }, [dispatch]);

  /** Persist credentials manually (e.g. after OAuth / registration) */
  const setAuthFromResponse = useCallback(
    (newToken: string, newUser: AuthUser) => {
      dispatch(setCredentials({ token: newToken, user: newUser }));
    },
    [dispatch]
  );

  /** Email + password login — returns { error } on failure */
  const login = useCallback(
    async (email: string, password: string): Promise<{ error?: string }> => {
      const result = await dispatch(loginThunk({ email, password }));
      if (loginThunk.rejected.match(result)) {
        return { error: (result.payload as string) || "Login failed." };
      }
      return {};
    },
    [dispatch]
  );

  /** Clear all auth state and redirect to sign-in */
  const logout = useCallback(async () => {
    try {
      await authClient.signOut().catch(() => {});
    } catch { /* ignore */ }
    await dispatch(logoutThunk());
    router.push("/auth/signin");
  }, [dispatch, router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated,
        login,
        logout,
        setAuthFromResponse,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within <AuthProvider>");
  }
  return ctx;
}
