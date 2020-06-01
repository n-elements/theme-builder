import React from "react";
import { IVariable } from "@store/theming/types";
// import color from "css-color-converter";
import Color from "color";
import clsx from "clsx";
import classes from "./ColorSwatch.module.css";
import { ColorPreview } from "@app/Editor/components/ColorPreview";
import { formatVariableName } from "@app/Editor/helpers/variable";
import { isKeyword } from "@app/Editor/helpers/keywords";

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
  const fallbackValue = isKeyword(value) ? "rgb(0, 0, 0)" : value;
  const rgbColor = Color(fallbackValue).rgb().string();
  const hslColor = Color(fallbackValue).hsl().string();
  const hexColor = Color(fallbackValue).hex();
  const formattedPropName = formatVariableName(propName);

  return (
    <div className={clsx(classes.ColorSwatch, className)} {...attributes}>
      <ColorPreview size="big" color={rgbColor} />
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
