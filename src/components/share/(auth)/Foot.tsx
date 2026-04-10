"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const FootAuth = ({
  link,
  type,
}: {
  type: "Login" | "Register";
  link: string;
}) => {
  const t = useTranslations(`${type}`);
  const locale = useLocale();
  return (
    <div className="flex items-center justify-center gap-1 text-sm my-5">
      <span className="text-muted-foreground">{t("haveAccount")}</span>
      <Link href={`/${locale}/${link}`} className="font-bold hover:underline">
        {t("title")}
      </Link>
    </div>
  );
};

export default FootAuth;
