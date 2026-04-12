"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ collapsed }: { collapsed?: boolean }) => {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}`}
      className="flex items-center gap-2 pb-3 border-b border-border "
    >
      <Image
        src="/images/me.png"
        width={40}
        height={40}
        alt="logo"
        className="rounded-full"
      />

      <div
        className={`flex flex-col overflow-hidden transition-all ${
          collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
        }`}
      >
        <p className="text-lg font-bold whitespace-nowrap">YouTurkeyTech</p>
        <p className="text-xs text-muted-foreground whitespace-nowrap">
          by <strong>Youssef Turkey</strong>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
