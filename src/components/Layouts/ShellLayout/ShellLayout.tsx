import React, { ReactNode } from "react";
import clsx from "clsx";
import { AppHeader } from "@components/AppHeader";
import classes from "./ShellLayout.module.css";

export interface IShellLayoutProps extends PropsClass {
  canvas: ReactNode;
  sidebar?: ReactNode;
  toolbar?: ReactNode;
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
        {props.sidebar ? <div>{props.sidebar}</div> : null}
        {props.toolbar ? <div>{props.toolbar}</div> : null}
        <div className={classes.Canvas}>{props.canvas}</div>
      </section>
    </main>
  );
};
