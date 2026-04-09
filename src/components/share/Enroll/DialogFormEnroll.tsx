import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import Enroll from "../Enroll";
import FormEnroll from "./FromEnroll";

const DialogFormEnroll = ({
  open,
  setOpen,
  setIsOpenSheet,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  setIsOpenSheet?: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        onClick={() => {
          setOpen?.(true);

          setTimeout(() => {
            setIsOpenSheet?.(false);
          }, 0);
        }}
      >
        <Enroll />
      </div>

      <DialogContent className="w-full max-w-90 sm:max-w-4xl p-0">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div className="py-8 px-5 sm:py-10">
          <FormEnroll />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogFormEnroll;
