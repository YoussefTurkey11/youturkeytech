"use client";

import { Button } from "@/components/ui/button";
import { useUpdateMeService } from "@/services/user/updateMe.service";
import { RootState, useAppSelector } from "@/redux/store";
import { UserFormSchema, userSchema } from "@/validation/user/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FieldInputForm from "@/components/share/FieldInputForm";
import { useTranslations } from "next-intl";

const Profile = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const { myInfo, isLoading } = useUpdateMeService();
  const t = useTranslations("User");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userSchema(t)),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user?.data.name,
        email: user?.data.email,
        phone: user?.data.phone,
        position: user?.data.position,
      });
    }
  }, [user, reset]);

  const onSubmit = async (data: UserFormSchema) => {
    try {
      await myInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-81px)]">
      <div className="bg-card rounded-2xl p-6 flex flex-col gap-6 w-full max-w-md shadow-md">
        {/* 🖼 Avatar */}
        <div className="flex justify-center">
          <Image
            src={"/images/me.png"}
            width={100}
            height={100}
            alt="profile"
            className="rounded-full border"
          />
        </div>

        {/* 📄 Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FieldInputForm
            label={t("form.name")}
            id="name"
            type="text"
            placeholder={t("form.namePlaceholder")}
            register={register}
            errors={errors}
          />

          <FieldInputForm
            label={t("form.email")}
            id="email"
            type="email"
            placeholder={t("form.emailPlaceholder")}
            register={register}
            errors={errors}
          />

          <FieldInputForm
            label={t("form.phone")}
            id="phone"
            type="text"
            placeholder={t("form.phonePlaceholder")}
            register={register}
            errors={errors}
          />

          <FieldInputForm
            label={t("form.position")}
            id="position"
            type="text"
            placeholder={t("form.positionPlaceholder")}
            register={register}
            errors={errors}
          />

          {/* 🔘 Actions */}
          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || isLoading || !isDirty}
            >
              {isSubmitting || isLoading
                ? t("form.update")
                : t("form.updateProfile")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
