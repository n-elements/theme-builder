import React from "react";
import { IVariable } from "@store/theming/types";
import clsx from "clsx";
import classes from "./ColorSwatch.module.css";

export interface IColorSwatchProps extends PropsClass {
  propName: IVariable["name"];
  value: IVariable["value"];
}

export const ColorSwatch = function ({
  className,
  propName,
  value,
  ...attributes
}: IColorSwatchProps) {
  return (
    <div className={clsx(classes.ColorSwatch, className)} {...attributes}>
      <input className={classes.Preview} type="color" value={value} disabled />
      <div>
        <p>
          <strong>{propName}</strong>
        </p>
        <p data-size="small" className={classes.ColorValue}>
          {value}
        </p>
        <p data-size="small" className={classes.ColorValue}>
          {value}
        </p>
      </div>
    </div>
  );
};
