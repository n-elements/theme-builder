import React, { ReactNode } from "react";
import clsx from "clsx";
import classes from "./AppToolbar.module.css";

export interface IAppToolbarProps extends PropsClass {
  children: ReactNode;
}

export const AppToolbar = function ({
  children,
  className,
  ...attributes
}: IAppToolbarProps) {
  return (
    <div className={clsx(classes.AppToolbar, className)} {...attributes}>
      {children}
    </div>
  );
};
