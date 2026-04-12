"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { courseStatus } from "@/types/courseType";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  applicant: courseStatus;
};

const ViewMore = ({ open, setOpen, applicant }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="border-b pb-3">
          <DialogTitle>View More</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-5">
          <div className="flex flex-col gap-2">
            <Label>Know us from</Label>
            <p className="p-3 rounded-lg border bg-accent">
              {applicant.source}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Label>His/Her Goal</Label>
            <p className="p-3 rounded-lg border bg-accent">{applicant.goal}</p>
          </div>
          {applicant.notes && (
            <div className="flex flex-col gap-2">
              <Label>Note</Label>
              <p className="p-3 rounded-lg border bg-accent">
                {applicant.notes}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMore;
