import React, { ReactNode } from "react";
import classes from "./EditorWrapper.module.css";
import clsx from "clsx";

export interface IEditorWrapperProps extends PropsClass {
  children: ReactNode;
}

export const EditorWrapper = function ({
  children,
  className,
  ...attributes
}: IEditorWrapperProps) {
  return (
    <div className={clsx(classes.EditorWrapper, className)} {...attributes}>
      {children}
    </div>
  );
};
