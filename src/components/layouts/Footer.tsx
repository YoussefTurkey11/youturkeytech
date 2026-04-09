"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="text-center text-muted-foreground text-sm mb-10 px-6">
      {t("txt")}
    </footer>
  );
};

export default Footer;
