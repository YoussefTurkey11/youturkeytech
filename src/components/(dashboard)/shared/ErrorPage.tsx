"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const ErrorPage = () => {
  const t = useTranslations("errorAlert");
  return (
    <Alert variant="destructive" className="w-full max-w-md my-10">
      <AlertCircleIcon />
      <AlertTitle>{t("title")}</AlertTitle>
      <AlertDescription>{t("description")}</AlertDescription>
    </Alert>
  );
};

export default ErrorPage;
