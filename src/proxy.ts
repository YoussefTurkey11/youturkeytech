import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const locale =
    segments[0] && ["en", "ar"].includes(segments[0]) ? segments[0] : "en";

  const token = req.cookies.get("access_token")?.value;

  const pathnameWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";

  const protectedRoutes = [
    "/admin",
    "/users",
    "/profile",
    "/allCourseApplicants",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathnameWithoutLocale.startsWith(route),
  );

  const isLoginPage = pathnameWithoutLocale.startsWith("/login");

  if (isProtectedRoute && !token) {
    const loginUrl = new URL(`/${locale}/login`, req.url);
    loginUrl.searchParams.set("returnUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginPage && token) {
    return NextResponse.redirect(new URL(`/${locale}/admin`, req.url));
  }

  const response = intlMiddleware(req);
  return response ?? NextResponse.next();
}

export const config = {
  matcher: ["/(en|ar)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
