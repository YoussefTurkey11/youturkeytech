"use client";

import ItemSidebar from "./ItemSidebar";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { setSidebarHover } from "@/redux/slices/uiSlice";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Logo from "@/assets/logo/logo";
import Logout from "../../shared/Logout";

const SidebarDesktop = () => {
  const dispatch = useAppDispatch();

  const { sidebarOpen, sidebarHover } = useAppSelector(
    (state: RootState) => state.uiSlice,
  );

  const expanded = useMemo(
    () => sidebarOpen || sidebarHover,
    [sidebarOpen, sidebarHover],
  );

  return (
    <motion.aside
      animate={{ width: expanded ? 350 : 80 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={() => dispatch(setSidebarHover(true))}
      onMouseLeave={() => dispatch(setSidebarHover(false))}
      className="
        hidden lg:flex
        p-5
        border-r
        border-border
        bg-card
        flex-col
        justify-between
      "
    >
      <div>
        <div className="border-b border-border pb-2.5">
          <Logo />
        </div>
        <ItemSidebar collapsed={!expanded} />
      </div>

      <div className="pt-5 border-t border-border">
        <Logout collapsed={!expanded} />
      </div>
    </motion.aside>
  );
};

export default SidebarDesktop;
