"use client";
import { removeAuthCookie } from "@/utils/cookies";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/store";
import { clearAuth } from "@/redux/slices/authSlice";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

const Logout = ({ collapsed }: { collapsed: boolean }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const t = useTranslations("logout");

  return (
    <Button
      className={"w-full py-5"}
      onClick={() => {
        removeAuthCookie();
        dispatch(clearAuth());
        toast.success(t("success"));
        router.push(`/${locale}/login`);
      }}
    >
      {collapsed ? (
        <LogOut size={30} />
      ) : (
        <>
          <span>Logout</span>
          <LogOut size={20} />
        </>
      )}
    </Button>
  );
};

export default Logout;
