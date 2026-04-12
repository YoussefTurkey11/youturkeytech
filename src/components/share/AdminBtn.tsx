"use client";
import { Gauge } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { RootState, useAppSelector } from "@/redux/store";

const AdminBtn = () => {
  const locale = useLocale();
  const isAdmin = useAppSelector((state: RootState) => state.auth.user);

  if (!isAdmin) return;

  return (
    <Button
      variant="outline"
      className={"rounded-full cursor-pointer"}
      render={
        <Link href={`/${locale}/admin`}>
          <Gauge size={10} />
        </Link>
      }
    />
  );
};

export default AdminBtn;
