import React, { ReactNode } from "react";
import clsx from "clsx";
import { AppHeader } from "@components/AppHeader";
import classes from "./ShellLayout.module.css";

export interface IShellLayoutProps extends PropsClass {
  canvasArea: ReactNode;
  sidebarArea?: ReactNode;
  toolbarArea?: ReactNode;
  actions?: ReactNode;
}

export const ShellLayout = function ({
  className,
  sidebarArea,
  toolbarArea,
  canvasArea,
  actions,
  ...props
}: IShellLayoutProps) {
  return (
    <main
      tabIndex={-1}
      className={clsx(classes.ShellLayout, className)}
      {...props}
    >
      <AppHeader />

      <div className={classes.View}>
        {sidebarArea && (
          <section className={classes.Sidebar}>{sidebarArea}</section>
        )}
        {canvasArea}
      </div>
    </main>
  );
};
