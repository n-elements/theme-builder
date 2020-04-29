import React, { ReactNode } from "react";
import clsx from "clsx";
import { AppHeader } from "@components/AppHeader";
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
    <main
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
    </main>
  );
};
