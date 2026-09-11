// ============================================================
// MIDDLEWARE STUB — Auth guard for /admin routes
// Prepared for future integration with next-auth, custom JWT,
// or session-based authentication.
//
// HOW TO ACTIVATE:
// 1. Install next-auth: pnpm add next-auth
// 2. Set up auth provider in app/api/auth/[...nextauth]/route.ts
// 3. Uncomment the getToken block below
// ============================================================

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect all /admin routes except /admin/login
  const isAdminRoute = pathname.startsWith("/admin")
  const isLoginPage = pathname === "/admin/login"

  if (isAdminRoute && !isLoginPage) {
    // TODO: Uncomment when auth is ready:
    //
    // const token = await getToken({ req: request })
    // if (!token) {
    //   const loginUrl = new URL("/admin/login", request.url)
    //   loginUrl.searchParams.set("callbackUrl", pathname)
    //   return NextResponse.redirect(loginUrl)
    // }
    //
    // Role-based check example:
    // if (token.role !== "admin") {
    //   return NextResponse.redirect(new URL("/", request.url))
    // }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
