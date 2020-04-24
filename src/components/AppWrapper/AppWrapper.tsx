import React, { ReactNode } from "react";
import clsx from "clsx";
import classes from "./AppWrapper.module.css";

export interface IAppWrapperProps extends PropsClass {
  children: ReactNode;
}

export const AppWrapper = function (props: IAppWrapperProps) {
  return (
    <main className={clsx(classes.AppWrapper, props.className)} {...props}>
      {props.children}
    </main>
  );
};
