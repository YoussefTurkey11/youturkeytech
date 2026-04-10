"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HeadAds = () => {
  const [isOpen, setIsOpen] = useState(true);
  const t = useTranslations("Header");
  const pathname = usePathname();
  const locale = useLocale();

  if (
    pathname.startsWith(`/${locale}/admin`) ||
    pathname.startsWith(`/${locale}/dashboard`) ||
    pathname.startsWith(`/${locale}/login`) ||
    pathname.startsWith(`/${locale}/register`) ||
    pathname.startsWith(`/${locale}/forgotPassword`) ||
    pathname.startsWith(`/${locale}/resetPassword`) ||
    pathname.startsWith(`/${locale}/verifyOTP`)
  ) {
    return null;
  }

  return (
    <nav
      className={`${isOpen ? "flex items-center justify-center gap-5" : "hidden"} bg-foreground text-background py-1 px-3`}
    >
      <p className="text-xs md:text-sm lg:text-md">🎉 {t("ad")} 🚀</p>
      <Button
        variant={"ghost"}
        className={"cursor-pointer"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <X />
      </Button>
    </nav>
  );
};

export default HeadAds;
