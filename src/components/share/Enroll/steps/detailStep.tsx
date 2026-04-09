"use client";
import { UseFormReturn } from "react-hook-form";
import { EnrollFormData } from "@/validation/Enroll.schema";
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
              setValue("heardFrom", value as EnrollFormData["heardFrom"], {
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
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="referral">Friend / Referral</SelectItem>
                <SelectItem value="google">Google Search</SelectItem>
                <SelectItem value="other">{t("detailStep.other")}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.heardFrom && (
            <p className="text-red-500 text-sm">{errors.heardFrom.message}</p>
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
