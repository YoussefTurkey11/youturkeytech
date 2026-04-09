"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const HeadAds = () => {
  const [isOpen, setIsOpen] = useState(true);
  const t = useTranslations("Header");
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
