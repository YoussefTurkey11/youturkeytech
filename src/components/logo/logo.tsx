import Image from "next/image";
import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="hidden sm:flex sm:items-center sm:gap-2.5">
        <Image
          src={"/images/me.png"}
          width={50}
          height={50}
          alt="YouTurkeyTech"
          loading="eager"
          className="rounded-full"
        />
        <div className="flex flex-col gap-0">
          <p className="text-lg font-bold">YouTurkeyTech</p>
          <p className="text-xs text-muted-foreground">
            by <strong>Youssef Turkey</strong>
          </p>
        </div>
      </div>
      <Image
        src={"/images/me.png"}
        width={50}
        height={50}
        alt="YouTurkeyTech"
        loading="eager"
        className="rounded-full flex sm:hidden"
      />
    </div>
  );
};

export default Logo;
