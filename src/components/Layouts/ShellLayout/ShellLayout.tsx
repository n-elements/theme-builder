import React, { ReactNode } from "react";
import clsx from "clsx";
import { Resizable } from "re-resizable";
import { AppHeader } from "@components/AppHeader";
import classes from "./ShellLayout.module.css";

export interface IShellLayoutProps extends PropsClass {
  canvasArea: ReactNode;
  sidebarArea?: ReactNode;
  toolbarArea?: ReactNode;
  actions?: ReactNode;
}

export const ShellLayout = function (props: IShellLayoutProps) {
  return (
    <main
      tabIndex={-1}
      className={clsx(classes.ShellLayout, props.className)}
      {...props}
    >
      <AppHeader />

      <div className={classes.View}>
        {props.sidebarArea ? (
          <section className={classes.Sidebar}>{props.sidebarArea}</section>
        ) : null}
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
          <section className={classes.Toolbar}>
            <div className={classes.Scroller}>{props.toolbarArea}</div>
            {props.actions ? (
              <div className={classes.Actions}>{props.actions}</div>
            ) : null}
          </section>
        </Resizable>
        <section className={classes.Canvas}>{props.canvasArea}</section>
      </div>
    </main>
  );
};
