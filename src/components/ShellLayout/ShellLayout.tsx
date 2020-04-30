import React, { ReactNode } from "react";
import clsx from "clsx";
import { AppHeader } from "@components/AppHeader";
import { motion } from "framer-motion";
import classes from "./ShellLayout.module.css";

export interface IShellLayoutProps extends PropsClass {
  canvasArea: ReactNode;
  sidebarArea?: ReactNode;
}

export const ShellLayout = function ({
  className,
  sidebarArea,
  canvasArea,
  ...attributes
}: IShellLayoutProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      tabIndex={-1}
      className={clsx(classes.ShellLayout, className)}
      {...attributes}
    >
      <AppHeader />

      <div className={classes.View}>
        {sidebarArea && (
          <section className={classes.Sidebar}>{sidebarArea}</section>
        )}
        {canvasArea}
      </div>
    </motion.main>
  );
};
