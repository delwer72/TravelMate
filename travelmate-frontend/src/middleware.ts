import { NextRequest, NextResponse } from "next/server";

const TOKEN_KEY = "tm_auth_token";

// ─── JWT payload decoder (no crypto — just base64) ───────────────────────────
// We do a lightweight client-side decode here; the backend does the real verify.
function decodeJwtRole(token: string): string | null {
  try {
    const base64Payload = token.split(".")[1];
    // Replace URL-safe chars and decode
    const padded = base64Payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = Buffer.from(padded, "base64").toString("utf-8");
    const payload = JSON.parse(json);
    return payload.role ?? null;
  } catch {
    return null;
  }
}

// ─── Route rules ─────────────────────────────────────────────────────────────

const ADMIN_PATHS  = ["/dashboard/admin"];
const USER_PATHS   = ["/dashboard/user"];
const AUTH_PAGES   = ["/auth/signin", "/auth/signup"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(TOKEN_KEY)?.value ?? null;

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

  // ── Admin-only routes ───────────────────────────────────────────────────────
  if (ADMIN_PATHS.some((p) => pathname.startsWith(p))) {
    if (!isLoggedIn) {
      const signinUrl = new URL("/auth/signin", req.url);
      signinUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(signinUrl);
    }
    if (role !== "admin") {
      // Authenticated but wrong role → show the access-denied page
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
    // Both 'user' and 'admin' can view user dashboard
    if (role !== "user" && role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard/guest", req.url));
    }
  }

  // ── /dashboard root → redirect to role-appropriate dashboard ───────────────
  if (pathname === "/dashboard" || pathname === "/dashboard/") {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
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
  // Run on all pages except Next.js internals & static files
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
};
