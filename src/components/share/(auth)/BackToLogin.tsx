"use client";
import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const BackToLogin = () => {
  const t = useTranslations("Login");
  const locale = useLocale();
  return (
    <div className="flex items-center gap-1 text-xs my-5">
      <Link
        href={`/${locale}/login`}
        className="font-bold text-muted-foreground hover:underline hover:text-primary flex items-center gap-1 transition-colors"
      >
        {locale === "en" ? (
          <ArrowLeft size={16} />
        ) : (
          <ArrowLeft size={16} className="rotate-180" />
        )}
        <span>{t("back")}</span>
      </Link>
    </div>
  );
};

export default BackToLogin;
