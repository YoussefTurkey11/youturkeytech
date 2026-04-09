"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const DialogPreview = () => {
  const t = useTranslations("CTAButton");
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            className={cn(
              "relative text-sm font-medium rounded-full h-10 p-1 w-fit overflow-hidden transition-all duration-500",
              "ltr:ps-4 ltr:pe-12 rtl:ps-12 rtl:pe-4",
              "ltr:hover:ps-12 ltr:hover:pe-4 rtl:hover:ps-4 rtl:hover:pe-12",
              "group",
            )}
          >
            <span className="relative z-10 transition-all duration-500">
              {t("viewDemo")}
            </span>
            <span
              className={cn(
                "absolute w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500",
                "ltr:right-1 rtl:right-1",
                "ltr:group-hover:right-[calc(100%-36px)] rtl:group-hover:right-[calc(100%-36px)]",
              )}
            >
              <Play size={16} />
            </span>
          </Button>
        }
      />

      <DialogContent className="max-w-7xl p-0 overflow-hidden">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div className="w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/E3teHDB0KDw"
            title="YouTube video player"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPreview;
