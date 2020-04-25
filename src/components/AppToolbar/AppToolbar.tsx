import React, { ReactNode } from "react";
import clsx from "clsx";
import classes from "./AppToolbar.module.css";

export interface IAppToolbarProps extends PropsClass {
  children: ReactNode;
}

export const AppToolbar = function (props: IAppToolbarProps) {
  return (
    <div className={clsx(classes.AppToolbar, props.className)}>
      {props.children}
    </div>
  );
};
