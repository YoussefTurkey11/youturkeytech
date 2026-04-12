"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { CircleChevronRight, CircleEllipsis, Pencil } from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import { courseStatus } from "@/types/courseType";
import EditApplicant from "./EditApplicant";
import ViewMore from "./ViewMore";

const ActionApplicant = ({ applicants }: { applicants: courseStatus }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon">
              <CircleEllipsis className="h-4 w-4" />
            </Button>
          }
        />

        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setOpenEdit(true)}
            className="cursor-pointer"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setOpenMore(true)}
            className="cursor-pointer"
          >
            <CircleChevronRight className="mr-2 h-4 w-4" />
            View More
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditApplicant
        open={openEdit}
        setOpen={setOpenEdit}
        applicant={applicants}
      />

      <ViewMore open={openMore} setOpen={setOpenMore} applicant={applicants} />
    </>
  );
};

export default ActionApplicant;
