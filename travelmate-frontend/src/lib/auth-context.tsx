"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

// ─── Types ────────────────────────────────────────────────────────────────────

export type UserRole = "guest" | "user" | "admin";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  logout: () => void;
  setAuthFromResponse: (token: string, user: AuthUser) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null);

const TOKEN_KEY = "tm_auth_token";
const USER_KEY = "tm_auth_user";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /** Persist auth state returned from the backend */
  const setAuthFromResponse = useCallback((newToken: string, newUser: AuthUser) => {
    try {
      localStorage.setItem(TOKEN_KEY, newToken);
      localStorage.setItem(USER_KEY, JSON.stringify(newUser));
      // Also store in a cookie so Next.js middleware can read it
      document.cookie = `${TOKEN_KEY}=${newToken}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
    } catch {
      // Ignore storage errors
    }
    setToken(newToken);
    setUser(newUser);
  }, []);

  // Hydrate from localStorage on mount & auto-sync with Better Auth session if present
  useEffect(() => {
    let isCancelled = false;

    async function initAuth() {
      try {
        const storedToken = localStorage.getItem(TOKEN_KEY);
        const storedUser = localStorage.getItem(USER_KEY);

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
          setIsLoading(false);
          return;
        }

        // If no token in localStorage, check if Better Auth has an active session
        const res = await fetch("/api/auth/session-sync", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          const data = await res.json();
          if (!isCancelled && data.success && data.token && data.user) {
            setAuthFromResponse(data.token, data.user);
          }
        }
      } catch {
        // Corrupt storage or offline — ignore
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    initAuth();

    return () => {
      isCancelled = true;
    };
  }, [setAuthFromResponse]);

  /** Sign in with email + password against the Express backend */
  const login = useCallback(
    async (email: string, password: string): Promise<{ error?: string }> => {
      try {
        const res = await fetch(`${API_BASE}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          return { error: data.message || "Invalid credentials." };
        }

        const authUser: AuthUser = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role || "user",
          profileImage: data.user.profileImage,
        };

        setAuthFromResponse(data.token, authUser);
        return {};
      } catch {
        return { error: "Network error. Please check your connection." };
      }
    },
    [setAuthFromResponse]
  );

  /** Clear all auth state and redirect to sign-in */
  const logout = useCallback(async () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      // Clear cookie
      document.cookie = `${TOKEN_KEY}=; path=/; max-age=0`;

      // Clear Better Auth session
      await authClient.signOut().catch(() => {});
    } catch {
      // Ignore
    }
    setToken(null);
    setUser(null);
    router.push("/auth/signin");
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: !!user && !!token,
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
