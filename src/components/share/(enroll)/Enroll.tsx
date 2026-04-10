"use client";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Enroll = ({ className }: { className?: string }) => {
  const t = useTranslations("CTAButton");

  return (
    <Button
      className={cn(
        "relative text-sm font-medium rounded-full h-10 p-1 w-fit overflow-hidden transition-all duration-500",
        "ltr:ps-4 ltr:pe-12 rtl:ps-12 rtl:pe-4",
        "ltr:hover:ps-12 ltr:hover:pe-4 rtl:hover:ps-4 rtl:hover:pe-12",
        "group",
        className,
      )}
    >
      <span className="relative z-10 transition-all duration-500">
        {t("enrollNow")}
      </span>
      <span
        className={cn(
          "absolute w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-45",
          "ltr:right-1 rtl:right-1",
          "ltr:group-hover:right-[calc(100%-36px)] rtl:group-hover:right-[calc(100%-36px)]",
        )}
      >
        <ArrowUpRight size={16} />
      </span>
    </Button>
  );
};

export default Enroll;
