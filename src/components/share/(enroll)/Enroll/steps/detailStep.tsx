"use client";
import { UseFormReturn } from "react-hook-form";
import { EnrollFormData } from "@/validation/enroll/Enroll.schema";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

const DetailStep = ({ form }: { form: UseFormReturn<EnrollFormData> }) => {
  const t = useTranslations("FormEnroll");
  const {
    register,
    setValue,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("detailStep.title")}
        </h2>
        <p className="text-muted-foreground mt-1">
          {t("detailStep.description")}
        </p>
      </div>

      <div className="space-y-7">
        {/* How did you hear about us? */}
        <section className="space-y-3">
          <Label className="text-md sm:text-lg font-semibold">
            {t("detailStep.heardFrom")} <span className="text-red-500">*</span>
          </Label>
          <Select
            onValueChange={(value) =>
              setValue("source", value as EnrollFormData["source"], {
                shouldDirty: true,
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger className="w-full max-w-48 rounded-full">
              <SelectValue placeholder="Select a source..." />
            </SelectTrigger>
            <SelectContent className={"rounded-xl"}>
              <SelectGroup>
                <SelectLabel>{t("detailStep.select")}</SelectLabel>
                <SelectItem value="YouTube">Youtube</SelectItem>
                <SelectItem value="Instagram">Instagram</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                <SelectItem value="Other">{t("detailStep.other")}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.source && (
            <p className="text-red-500 text-sm">{errors.source.message}</p>
          )}
        </section>

        {/* Notes (optional) */}
        <section className="space-y-3">
          <Label className="text-md sm:text-lg font-semibold">
            {t("detailStep.notes")}
          </Label>
          <Textarea
            className="rounded-xl"
            placeholder={t("detailStep.notesPlaceholder")}
            {...register("notes")}
          />
        </section>
      </div>
    </div>
  );
};

export default DetailStep;
