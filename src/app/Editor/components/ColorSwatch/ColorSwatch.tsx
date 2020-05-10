import React from "react";
import { IVariable } from "@store/theming/types";
import color from "css-color-converter";
import clsx from "clsx";
import classes from "./ColorSwatch.module.css";
import { ColorPreview } from "@components/ColorPreview";
import { normalizeVariableName } from "@app/Editor/helpers/variable";

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
  const removeHexAlpha =
    value?.startsWith("#") && value.length > 7 ? value.slice(0, -2) : value;
  const rgbColor = color(value).toRgbString();
  const hslColor = color(value).toHslString();
  const hexColor = color(removeHexAlpha).toHexString();
  const formattedPropName = normalizeVariableName(propName);

  return (
    <div className={clsx(classes.ColorSwatch, className)} {...attributes}>
      <ColorPreview size="big" color={hexColor} />
      <div>
        <p className={classes.PropName}>
          <strong>{formattedPropName}</strong>
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
