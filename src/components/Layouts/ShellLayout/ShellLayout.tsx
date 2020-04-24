import React, { ReactNode } from "react";
import clsx from "clsx";
import { AppHeader } from "@components/AppHeader";
import classes from "./ShellLayout.module.css";

export interface IShellLayoutProps extends PropsClass {
  canvasArea: ReactNode;
  sidebarArea?: ReactNode;
  toolbarArea?: ReactNode;
}

export const ShellLayout = function (props: IShellLayoutProps) {
  return (
    <main
      tabIndex={-1}
      className={clsx(classes.ShellLayout, props.className)}
      {...props}
    >
      <AppHeader />

      <section className={classes.View}>
        {props.sidebarArea ? (
          <div className={classes.Sidebar}>{props.sidebarArea}</div>
        ) : null}
        {props.toolbarArea ? (
          <div className={classes.Toolbar}>{props.toolbarArea}</div>
        ) : null}
        <div className={classes.Canvas}>{props.canvasArea}</div>
      </section>
    </main>
  );
};
