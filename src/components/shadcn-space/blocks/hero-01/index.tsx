import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import BrandSlider from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import { avatarList, brandList } from "@/data/db";

export default function AgencyHeroSection() {
  return (
    <div className="relative">
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}
