import Timetable from "@/components/shadcn-space/tabs/tabs-01";
import Landpage from "./(landpage)/landpage/page";
import Roadmap from "./(landpage)/pricing-01/page";
import Projects from "@/components/shadcn-space/blocks/feature-02";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";

export default function Home() {
  return (
    <>
      <Landpage />
      <Roadmap />
      <Timetable />
      <Projects />
      <CTA />
    </>
  );
}
