import Timetable from "@/components/(course)/shadcn-space/tabs/tabs-01";
import Projects from "@/components/(course)/shadcn-space/blocks/feature-02";
import CTA from "@/components/(course)/shadcn-space/blocks/cta-01/cta";
import TestimonialPage from "@/components/ui/testimonial-1";
import Landpage from "./landpage/page";
import Roadmap from "./pricing-01/page";
import HeadAdsServer from "@/components/layouts/HeadAds/HeadAdsServer";
import Header from "@/components/(course)/shadcn-space/blocks/hero-01/header";
import { navigationData } from "@/data/db";
import { Skiper89 } from "@/components/ui/skiper-ui/skiper89";
import FootServer from "@/components/layouts/Footer/FootServer";

export default function CourseLandpage() {
  return (
    <>
      <HeadAdsServer />
      <Header navigationData={navigationData} />
      <main>
        <Landpage />
        <Roadmap />
        <Timetable />
        <Projects />
        <TestimonialPage />
        <CTA />
      </main>
      <Skiper89 />
      <FootServer />
    </>
  );
}
