"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

type PricingPlan = {
  plan_bg_color: string;
  plan_name: string;
  plan_descp: string;
  plan_feature: string[];
};

const pricingData: PricingPlan[] = [
  {
    plan_bg_color: "bg-blue-500/10",
    plan_name: "Beginner level",
    plan_descp:
      "Build your foundation from scratch — understand the web, structure pages, style them beautifully, and add interactivity.",
    plan_feature: ["HTML5", "CSS3", "Bootstrap", "JavaScript & ES6+"],
  },
  {
    plan_bg_color: "bg-teal-400/20",
    plan_name: "Intermediate level",
    plan_descp:
      "Upgrade to modern workflows — component-based architecture, live APIs, professional design with Tailwind, and state management.",
    plan_feature: ["Git & GitHub", "Tailwind CSS", "React.js", "Context API"],
  },
  {
    plan_bg_color: "bg-violet-400/20",
    plan_name: "Advanced level",
    plan_descp:
      "Think and build like a professional — TypeScript, Redux, Next.js, deployment pipelines, testing, and production-grade architecture.",
    plan_feature: ["TypeScript", "Redux", "Next.js", "Testing & Deployment"],
  },
];

const Pricing = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="bg-background py-10 xl:py-0" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 lg:py-20 sm:py-16 py-8">
        <div className="flex flex-col gap-8 md:gap-12 justify-center items-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-700 ease-in-out">
            {/* Badge */}
            <Badge
              variant={"outline"}
              className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7 capitalize"
            >
              Course roadmap
            </Badge>
            {/* Heading */}
            <div className="max-w-3xs sm:max-w-md mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-bold capitalize">
                Your path from zero to job-ready
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg font-normal mt-4">
                Three levels, each building on the last — with a real project at
                every stage to cement your skills.
              </p>
            </div>
          </div>
          {/* Pricing Plans */}
          <div className="flex flex-col xl:flex-row items-center justify-center flex-wrap gap-6 w-full">
            {pricingData?.map((items: PricingPlan, index: number) => (
              <motion.div
                key={index}
                // variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="w-full xl:w-fit"
              >
                <Card
                  className={cn(
                    items.plan_bg_color,
                    "p-8 sm:p-10 rounded-2xl ring-0 w-full xl:w-fit",
                  )}
                  key={index}
                >
                  <CardContent className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start self-stretch px-0 h-full lg:h-50 w-full">
                    <div className="flex flex-col items-start justify-between self-stretch gap-6">
                      <div className="flex flex-col gap-3">
                        <Badge className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7">
                          {items.plan_name}
                        </Badge>
                        <p className="text-sm font-normal text-muted-foreground max-w-56">
                          {items.plan_descp}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Button className="relative bg-white hover:bg-white hover:text-black dark:hover:text-black text-black text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
                          <span className="relative z-10 transition-all duration-500">
                            Enroll Now
                          </span>
                          <div className="absolute right-1 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="hidden sm:block"
                    />
                    <Separator
                      orientation="horizontal"
                      className="sm:hidden block"
                    />
                    <div className="flex flex-col items-start gap-3 grow">
                      <p className="text-card-foreground text-base sm:text-xl font-normal sm:font-medium">
                        Features
                      </p>
                      <ul className="flex flex-col items-start self-stretch gap-3">
                        {items.plan_feature?.map(
                          (feature: string, index: number) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-3 text-card-foreground text-base font-normal tracking-normal"
                              >
                                <Check size={16} aria-hidden="true" />
                                {feature}
                              </li>
                            );
                          },
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
