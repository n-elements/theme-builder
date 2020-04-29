import React, { ReactNode } from "react";
import clsx from "clsx";
import classes from "./FieldWrapper.module.css";

export interface IFieldWrapperProps extends PropsClass {
  children: ReactNode;
}

export const FieldWrapper = function ({
  className,
  children,
  ...attributes
}: IFieldWrapperProps) {
  return (
    <div className={clsx(classes.FieldWrapper, className)} {...attributes}>
      {children}
    </div>
  );
};
