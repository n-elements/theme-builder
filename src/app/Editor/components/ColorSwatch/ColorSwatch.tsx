import React from "react";
import { IVariable } from "@store/theming/types";
import color from "css-color-converter";
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
  const rgbColor = color(value).toRgbString();
  const hslColor = color(value).toHslString();
  const hexColor = color(value).toHexString();

  return (
    <div className={clsx(classes.ColorSwatch, className)} {...attributes}>
      <input
        className={classes.Preview}
        type="color"
        value={hexColor}
        disabled
      />
      <div>
        <p className={classes.PropName}>
          <strong>{propName}</strong>
        </p>
        <p data-size="small" className={classes.ColorValue}>
          {rgbColor}
        </p>
        <p data-size="small" className={classes.ColorValue}>
          {hslColor}
        </p>
        <p data-size="small" className={classes.ColorValue}>
          {hexColor}
        </p>
      </div>
    </div>
  );
};
