import { Button } from "./button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const Enroll = ({ className }: { className?: string }) => (
  <Button
    className={cn(
      "relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden",
      className,
      "cursor-pointer",
    )}
  >
    <span className="relative z-10 transition-all duration-500">
      Enroll Now
    </span>
    <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
      <ArrowUpRight size={16} />
    </span>
  </Button>
);

export default Enroll;
