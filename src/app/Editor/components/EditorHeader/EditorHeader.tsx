import React from "react";
import clsx from "clsx";
import classes from "./EditorHeader.module.css";

export interface IEditorHeaderProps extends PropsClass {
  title: string;
  subtitle?: string;
}

export const EditorHeader = function ({
  className,
  title,
  subtitle,
  ...attributes
}: IEditorHeaderProps) {
  return (
    <div className={clsx(classes.EditorHeader, className)} {...attributes}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
