import React, { CSSProperties } from "react";
import classes from "./ColorPreview.module.css";
import clsx from "clsx";
import Color from "color";

export interface IColorPreviewProps extends PropsClass {
  color?: string;
  onClick?: () => void;
  size?: "small" | "big";
}

export const ColorPreview = function ({
  className,
  color,
  size,
  ...attributes
}: IColorPreviewProps) {
  return (
    <span
      className={clsx(classes.Swatch, className)}
      style={{ "--color": Color(color).rgb() } as CSSProperties}
      data-size={size}
      {...attributes}
    ></span>
  );
};

ColorPreview.defaultProps = {
  size: "small",
} as Partial<IColorPreviewProps>;
