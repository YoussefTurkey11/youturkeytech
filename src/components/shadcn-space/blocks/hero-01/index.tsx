import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import BrandSlider, {
  BrandList,
} from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import type { AvatarList } from "@/components/shadcn-space/blocks/hero-01/hero";

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
    },
  ];

  const brandList: BrandList[] = [
    {
      image: "/images/eyouth.png",
      lightimg: "/images/eyouth.png",
      name: "EYouth",
    },
    {
      image: "/images/nti.png",
      lightimg: "/images/nti.png",
      name: "NTI - National Telecommunication Institute",
    },
    {
      image: "/images/graphitopia.jpg",
      lightimg: "/images/graphitopia.jpg",
      name: "Graphitopia",
    },
    {
      image: "/images/sis.jpg",
      lightimg: "/images/sis.jpg",
      name: "SIS Platform",
    },
  ];

  return (
    <div className="relative">
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}
