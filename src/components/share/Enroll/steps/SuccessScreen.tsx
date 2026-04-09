"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

const SuccessScreen = () => {
  const t = useTranslations("FormEnroll");

  useEffect(() => {
    const launchConfetti = () => {
      // انفجار رئيسي من الأعلى
      confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#22c55e", "#3b82f6", "#eab308", "#ec4899"],
      });

      // انفجار يسار
      setTimeout(() => {
        confetti({
          particleCount: 120,
          angle: 60,
          spread: 70,
          origin: { x: 0.1, y: 0.7 },
        });
      }, 300);

      // انفجار يمين
      setTimeout(() => {
        confetti({
          particleCount: 120,
          angle: 120,
          spread: 70,
          origin: { x: 0.9, y: 0.7 },
        });
      }, 500);

      // انفجار نهائي كبير في المنتصف
      setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.5 },
          colors: ["#22c55e", "#eab308", "#a855f7"],
        });
      }, 800);
    };

    // تشغيل الاحتفال
    launchConfetti();

    // خيار إضافي: إمكانية إعادة الاحتفال عند النقر على العنوان
    const handleTitleClick = () => launchConfetti();
    const titleElement = document.getElementById("success-title");
    titleElement?.addEventListener("click", handleTitleClick);

    return () => {
      titleElement?.removeEventListener("click", handleTitleClick);
    };
  }, []);

  return (
    <div className="mx-auto space-y-8 px-5 text-center">
      <div className="flex flex-col items-center justify-center space-y-6 ">
        {/* Success Icon + Title */}
        <div className="space-y-4">
          <div className="mx-auto w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          </div>

          <div>
            <h2
              id="success-title"
              className="text-xl sm:text-5xl font-bold tracking-tight cursor-pointer hover:scale-105 transition-transform"
            >
              {t("successScreen.title")} 🎉
            </h2>
            <p className="text-xl text-muted-foreground mt-2">
              {t("successScreen.welcome")}{" "}
              <span className="font-semibold text-primary">YouTubeTech</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground max-w-md text-sm sm:text-lg">
          {t("successScreen.description")}
        </p>

        {/* Features Grid */}
        <div className="grid gap-4 w-full max-w-md mt-6">
          <div className="flex items-start gap-3 p-4 rounded-2xl border bg-card">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <div className="flex flex-col items-start">
              <h3 className="font-semibold">
                {t("successScreen.features.whatsappGroup")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("successScreen.features.whatsappGroupDescription")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl border bg-card">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <div className="flex flex-col items-start">
              <h3 className="font-semibold">
                {t("successScreen.features.confirmationEmail")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("successScreen.features.confirmationEmailDescription")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl border bg-card">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <div className="flex flex-col items-start">
              <h3 className="font-semibold">
                {t("successScreen.features.courseStartsSoon")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("successScreen.features.courseStartsSoonDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
