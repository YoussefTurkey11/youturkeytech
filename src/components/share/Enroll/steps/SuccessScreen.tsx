"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { EnrollFormData } from "@/validation/Enroll.schema";
import { CheckCircle2 } from "lucide-react";

const SuccessScreen = ({ formData }: { formData: EnrollFormData }) => {
  // تشغيل الاحتفال عند تحميل الكومبوننت
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
              className="text-5xl font-bold tracking-tight cursor-pointer hover:scale-105 transition-transform"
            >
              You're in! 🎉
            </h2>
            <p className="text-xl text-muted-foreground mt-2">
              Welcome to{" "}
              <span className="font-semibold text-primary">YouTubeTech</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground max-w-md text-lg">
          We'll review your enrollment and reach out to you shortly via email
          and WhatsApp.
        </p>

        {/* Features Grid */}
        <div className="grid gap-4 w-full max-w-md mt-6">
          <div className="flex items-start gap-3 text-left p-4 rounded-2xl border bg-card">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold">WhatsApp Group</h3>
              <p className="text-sm text-muted-foreground">
                We'll send you the group link within 24 hours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-left p-4 rounded-2xl border bg-card">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold">Confirmation Email</h3>
              <p className="text-sm text-muted-foreground">
                Check your inbox for all enrollment details
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-left p-4 rounded-2xl border bg-card">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold">Course Starts Soon</h3>
              <p className="text-sm text-muted-foreground">
                Get ready — your frontend journey begins here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
