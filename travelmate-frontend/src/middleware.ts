import { NextRequest, NextResponse } from "next/server";

const TOKEN_KEY = "tm_auth_token";

// ─── JWT payload decoder (no crypto — just base64) ───────────────────────────
function decodeJwtRole(token: string): string | null {
  try {
    const base64Payload = token.split(".")[1];
    if (!base64Payload) return null;
    const padded = base64Payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = Buffer.from(padded, "base64").toString("utf-8");
    const payload = JSON.parse(json);
    return payload.role ?? null;
  } catch {
    return null;
  }
}

// ─── Route rules ─────────────────────────────────────────────────────────────
const ADMIN_PATHS = ["/dashboard/admin"];
const USER_PATHS = ["/dashboard/user"];
const AUTH_PAGES = ["/auth/signin", "/auth/signup"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow callback page and api endpoints to pass through
  if (pathname.startsWith("/auth/callback") || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const token = req.cookies.get(TOKEN_KEY)?.value ?? null;
  const hasBetterAuthSession =
    !!req.cookies.get("better-auth.session_token")?.value ||
    !!req.cookies.get("__Secure-better-auth.session_token")?.value;

  const role = token ? decodeJwtRole(token) : null;
  const isLoggedIn = !!role;

  // ── If the user is already signed in, don't let them see auth pages ────────
  if (AUTH_PAGES.some((p) => pathname.startsWith(p))) {
    if (isLoggedIn) {
      const dest =
        role === "admin"
          ? "/dashboard/admin"
          : role === "user"
          ? "/dashboard/user"
          : "/dashboard/guest";
      return NextResponse.redirect(new URL(dest, req.url));
    }
    return NextResponse.next();
  }

  // ── If user has Better Auth session but no tm_auth_token on protected route ─
  // Route through callback to sync JWT without dropping auth
  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    ADMIN_PATHS.some((p) => pathname.startsWith(p)) ||
    USER_PATHS.some((p) => pathname.startsWith(p));

  if (isProtectedRoute && !isLoggedIn && hasBetterAuthSession) {
    const callbackUrl = new URL("/auth/callback", req.url);
    callbackUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(callbackUrl);
  }

  // ── Admin-only routes ───────────────────────────────────────────────────────
  if (ADMIN_PATHS.some((p) => pathname.startsWith(p))) {
    if (!isLoggedIn) {
      const signinUrl = new URL("/auth/signin", req.url);
      signinUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(signinUrl);
    }
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard/access-denied", req.url));
    }
  }

  // ── User routes (user OR admin may access) ─────────────────────────────────
  if (USER_PATHS.some((p) => pathname.startsWith(p))) {
    if (!isLoggedIn) {
      const signinUrl = new URL("/auth/signin", req.url);
      signinUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(signinUrl);
    }
    if (role !== "user" && role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard/guest", req.url));
    }
  }

  // ── /dashboard root → redirect to role-appropriate dashboard ───────────────
  if (pathname === "/dashboard" || pathname === "/dashboard/") {
    if (!isLoggedIn) {
      const signinUrl = new URL("/auth/signin", req.url);
      return NextResponse.redirect(signinUrl);
    }
    const dest =
      role === "admin"
        ? "/dashboard/admin"
        : role === "user"
        ? "/dashboard/user"
        : "/dashboard/guest";
    return NextResponse.redirect(new URL(dest, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
