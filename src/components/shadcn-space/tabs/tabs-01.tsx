"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import AccordionMotionServices from "../accordion/accordion-07";
import { advancedLevels, beginnerLevels, intermediateLevels } from "@/data/db";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
};

const tabs = [
  {
    title: "Beginner",
    value: "beginner",
    content: (
      <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-foreground bg-background border border-border">
        <AccordionMotionServices items={beginnerLevels} />
      </div>
    ),
  },
  {
    title: "Intermediate",
    value: "intermediate",
    content: (
      <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-foreground bg-background border border-border">
        <AccordionMotionServices items={intermediateLevels} />
      </div>
    ),
  },
  {
    title: "Advanced",
    value: "advanced",
    content: (
      <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-foreground bg-background border border-border">
        <AccordionMotionServices items={advancedLevels} />
      </div>
    ),
  },
];

const Tabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: TabsProps) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovering, setHovering] = useState(false);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
  };

  const reorderedTabs = [
    tabs[activeIdx],
    ...tabs.filter((_, i) => i !== activeIdx),
  ];

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start perspective-[1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName,
        )}
      >
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={tab.value}
              onClick={() => handleSelect(idx)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative px-4 py-2 rounded-full cursor-pointer",
                tabClassName,
              )}
              style={{ transformStyle: "preserve-3d" }}
            >
              {isActive && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 bg-primary rounded-full",
                    activeTabClassName,
                  )}
                />
              )}
              <span
                className={cn(
                  "relative block text-sm",
                  isActive ? "text-background" : "text-foreground",
                )}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      <FadeInStack
        tabs={reorderedTabs}
        hovering={hovering}
        className={cn("mt-10", contentClassName)}
      />
    </>
  );
};

type FadeInStackProps = {
  className?: string;
  tabs: Tab[];
  hovering?: boolean;
};

const FadeInStack = ({ className, tabs }: FadeInStackProps) => {
  const activeTab = tabs[0];

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.value}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={cn("w-full", className)}
        >
          {activeTab.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function Timetable() {
  return (
    <>
      <div
        className="perspective-[1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-10 px-7 scroll-mt-20"
        id="timetable"
      >
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-700 ease-in-out">
          {/* Badge */}
          <Badge
            variant={"outline"}
            className="py-1 px-3 text-sm font-normal leading-5 w-fit h-7 capitalize"
          >
            Timetable
          </Badge>
          {/* Heading */}
          <div className="w-full sm:max-w-md mx-auto text-center">
            <h2 className="text-foreground text-3xl sm:text-5xl font-bold capitalize">
              Every session. Every topic.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg font-normal mt-4">
              Expand any level to see the complete breakdown — exactly what
              you'll learn, lesson by lesson.
            </p>
          </div>
        </div>
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}
