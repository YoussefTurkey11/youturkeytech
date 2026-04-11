"use client";
import Image from "next/image";
import { BadgeCheckIcon, LogOutIcon } from "lucide-react";
import { removeAuthCookie } from "@/utils/cookies";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RootState, useAppSelector } from "@/redux/store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";

const UserAvatar = () => {
  const router = useRouter();
  const t = useTranslations("User");
  const locale = useLocale();
  const user = useAppSelector((state: RootState) => state.auth.user);

  const userData = user?.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant={"ghost"}
            className="flex items-center gap-3 cursor-pointer hover:bg-transparent"
          >
            <div className="hidden sm:flex flex-col items-end gap-1">
              <p className="text-sm font-semibold">
                {userData?.name ?? "Username"}
              </p>
              <span className="text-xs text-muted-foreground">
                {userData?.email ?? "admin"}
              </span>
            </div>

            <Image
              src="/images/me.png"
              width={40}
              height={40}
              alt="user"
              className="rounded-full"
            />
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem className={"cursor-pointer"}>
            <Link
              href={`/${locale}/profile`}
              className="flex items-center gap-2 w-full"
            >
              <BadgeCheckIcon />
              {t("account")}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className={"cursor-pointer"}
          onClick={() => {
            removeAuthCookie();
            toast.success(t("validation.logoutSuccessfully"));
            router.push(`/${locale}/login`);
          }}
        >
          <LogOutIcon />
          {t("logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
