import HeroSection from "@/components/(course)/shadcn-space/blocks/hero-01/hero";
import BrandSlider from "@/components/(course)/shadcn-space/blocks/hero-01/brand-slider";
import { avatarList, brandList } from "@/data/db";

export default function AgencyHeroSection() {
  return (
    <section className="relative">
      <div>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </div>
    </section>
  );
}
