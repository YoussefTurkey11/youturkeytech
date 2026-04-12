"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useUpdateCourseApplicationStatusMutation } from "@/redux/apis/courseApi";
import { courseStatus } from "@/types/courseType";
import {
  ApplicantFormSchema,
  applicantSchema,
} from "@/validation/courses/updateApplicant.schema";
import { Status } from "@/validation/enroll/Enroll.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import ErrorPage from "../shared/ErrorPage";
import FieldSelectForm from "../shared/FieldSelectForm";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  applicant: courseStatus;
};

const EditApplicant = ({ open, setOpen, applicant }: Props) => {
  const [updateApplicant, { isLoading, isError }] =
    useUpdateCourseApplicationStatusMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<ApplicantFormSchema>({
    resolver: zodResolver(applicantSchema),
  });

  useEffect(() => {
    if (applicant) {
      reset({
        status: applicant.status,
      });
    }
  }, [applicant, reset]);

  const onSubmit = async (data: ApplicantFormSchema) => {
    try {
      await updateApplicant({
        id: applicant.id,
        status: data.status,
      }).unwrap();
      toast.success("Applicant status updated Successfully");
      setOpen(false);
    } catch (error) {
      console.error("Failed to update applicant status :", error);
      toast.error("Applicant status Update Failed");
    }
  };

  const statusOptions = Object.entries(Status).map(([key, value]) => ({
    label: key,
    value,
  }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="border-b pb-3">
          <DialogTitle>Edit Status</DialogTitle>
        </DialogHeader>

        {isError && <ErrorPage />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <FieldSelectForm
                  label="Status"
                  id="status"
                  errors={errors}
                  field={field}
                  options={statusOptions}
                  placeholder="Select status"
                />
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full py-5"
            disabled={isSubmitting || isLoading}
          >
            {isLoading ? "Updating..." : "Update Applicant"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditApplicant;
