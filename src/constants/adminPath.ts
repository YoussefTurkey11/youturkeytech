"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export const useAdminPath = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    pathname.startsWith(`/${locale}/admin`) ||
    pathname.startsWith(`/${locale}/users`) ||
    pathname.startsWith(`/${locale}/profile`) ||
    pathname.startsWith(`/${locale}/allCourseApplicants`) ||
    pathname.startsWith(`/${locale}/login`) ||
    pathname.startsWith(`/${locale}/register`) ||
    pathname.startsWith(`/${locale}/forgotPassword`) ||
    pathname.startsWith(`/${locale}/resetPassword`) ||
    pathname.startsWith(`/${locale}/verifyOTP`)
  );
};
