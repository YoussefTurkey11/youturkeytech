import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function middleware(req: NextRequest) {
  const response = intlMiddleware(req);
  const locale = req.nextUrl.pathname.split("/")[1];

  const token = req.cookies.get("access_token")?.value;

  const pathname = req.nextUrl.pathname.replace(/^\/(en|ar)/, "");

  const protectedRoutes = [`/${locale}/admin`];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected && !token) {
    const loginUrl = new URL(`/${locale}/login`, req.url);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/(en|ar)/", "/(en|ar)/admin", "/(en|ar)/:path*"],
};
