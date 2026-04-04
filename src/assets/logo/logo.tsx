import Image from "next/image";
import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={"/images/logo-light.webp"}
        width={50}
        height={50}
        alt="YouTurkeyTech"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
