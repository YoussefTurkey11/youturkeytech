"use client";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import { CheckCircle, CirclePlay, ScreenShare } from "lucide-react";

const featureData = [
  {
    icon: ScreenShare,
    title: "Personal Portfolio Website.",
    content:
      "A fully responsive multi-section portfolio showcasing your skills, projects, and a working contact form. Your very first deployable product.",
  },
  {
    icon: CirclePlay,
    title: "Movies Discovery App.",
    content:
      "Live search, genre filters, a favorites list powered by Context API — all wired to a real public API and deployed to Vercel.",
  },
  {
    icon: CheckCircle,
    title: "Production Next.js App.",
    content:
      "A job board or blog platform — TypeScript throughout, Redux for state, SSR rendering, full test coverage, and CI/CD on Vercel.",
  },
];

const Projects = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Projects;
