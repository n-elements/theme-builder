import React, { ReactNode } from "react";
import clsx from "clsx";
import { Resizable } from "re-resizable";
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
          <Resizable
            minWidth={380}
            maxWidth={800}
            bounds="parent"
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <div className={classes.Toolbar}>{props.toolbarArea}</div>
          </Resizable>
        ) : null}
        <div className={classes.Canvas}>{props.canvasArea}</div>
      </section>
    </main>
  );
};
