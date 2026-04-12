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
import ViewMore from "../allCourseApplicants/ViewMore";

const ActionApplicantAdmin = ({ applicants }: { applicants: courseStatus }) => {
  const [openMore, setOpenMore] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon">
              <CircleEllipsis className="h-6 w-6" />
            </Button>
          }
        />

        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setOpenMore(true)}
            className="cursor-pointer"
          >
            <CircleChevronRight className="mr-2 h-4 w-4" />
            View Info
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ViewMore open={openMore} setOpen={setOpenMore} applicant={applicants} />
    </>
  );
};

export default ActionApplicantAdmin;
