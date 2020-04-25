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
        <Resizable
          minWidth={380}
          maxWidth={600}
          defaultSize={{
            width: 380,
            height: "auto",
          }}
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
            <div className={classes.Scroller}>{toolbarArea}</div>
            {actions && <div className={classes.Actions}>{actions}</div>}
          </section>
        </Resizable>
        <section className={classes.Canvas}>{canvasArea}</section>
      </div>
    </main>
  );
};
