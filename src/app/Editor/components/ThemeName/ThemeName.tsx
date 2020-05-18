import React from "react";
import classes from "./ThemeName.module.css";
import { Edit } from "@components/Icons/12x";
import clsx from "clsx";

export interface IThemeNameProps extends PropsClass {
  value?: string;
}

export const ThemeName = function ({
  value,
  className,
  ...attributes
}: IThemeNameProps) {
  return (
    <div className={clsx(classes.ThemeName, className)} {...attributes}>
      <Edit className={classes.Icon} />
      <input type="text" className={classes.Input} defaultValue={value} />
    </div>
  );
};

ThemeName.defaultProps = {
  value: "theme-name",
} as Partial<IThemeNameProps>;
