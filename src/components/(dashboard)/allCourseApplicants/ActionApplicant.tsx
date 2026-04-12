"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import { courseStatus } from "@/types/courseType";
import EditApplicant from "./EditApplicant";
// import EditTransaction from "./EditTransaction";

const ActionApplicant = ({ applicants }: { applicants: courseStatus }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openNote, setOpenNote] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          }
        />

        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setOpenNote(true)}
            className="cursor-pointer"
          >
            <Pencil className="mr-2 h-4 w-4" />
            View Notes
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setOpenEdit(true)}
            className="cursor-pointer"
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditApplicant
        open={openEdit}
        setOpen={setOpenEdit}
        applicant={applicants}
      />
    </>
  );
};

export default ActionApplicant;
