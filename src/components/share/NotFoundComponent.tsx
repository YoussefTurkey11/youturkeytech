"use client";
import { Button } from "@/components/ui/button";
import { BadgeAlert } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const NotFoundComponent = () => {
  const t = useTranslations("notFound");
  const locale = useLocale();
  return (
    <div className="mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center gap-8 p-8 md:gap-12 md:p-16">
      <BadgeAlert size={100} />
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold">{t("title")}</h1>
        <p>{t("description")}</p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button
            variant={"outline"}
            className="h-9 px-4 py-2 cursor-pointer"
            render={<Link href={`/${locale}`}> {t("goBack")} </Link>}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
