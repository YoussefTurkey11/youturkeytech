import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

const DialogPreview = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
            <span className="relative z-10 transition-all duration-500">
              View Intro
            </span>
            <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)]">
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
