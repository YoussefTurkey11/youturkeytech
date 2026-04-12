"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ collapsed }: { collapsed?: boolean }) => {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}`}
      className={`flex items-center gap-2 ${collapsed ? "" : "px-5"} pb-3 border-b border-border`}
    >
      <Image
        src={"/images/me.png"}
        width={50}
        height={50}
        alt="logo"
        loading="eager"
        className="rounded-full"
      />
      {!collapsed && (
        <div className="flex flex-col gap-0">
          <p className="text-lg font-bold">YouTurkeyTech</p>
          <p className="text-xs text-muted-foreground">
            by <strong>Youssef Turkey</strong>
          </p>
        </div>
      )}
    </Link>
  );
};

export default Logo;
