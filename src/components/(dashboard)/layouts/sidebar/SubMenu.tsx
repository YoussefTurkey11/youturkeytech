"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SidebarItem } from "@/data/(dashboard)/sidebar/menuItem";
import { useLocale } from "next-intl";

const SubMenu = ({
  sub,
  isActive,
}: {
  sub: SidebarItem;
  isActive: (link?: string) => boolean;
}) => {
  const locale = useLocale();
  return (
    <motion.li
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={`/${locale}/${sub.link}`}
        className={`flex items-center gap-3 px-5 py-3 transition-colors
        ${
          isActive(sub.link)
            ? "bg-primary text-background rounded-r-md"
            : "hover:bg-primary hover:text-background hover:rounded-r-md"
        }`}
      >
        {sub.icon}
        <span className="capitalize">{sub.name}</span>
      </Link>
    </motion.li>
  );
};

export default SubMenu;
