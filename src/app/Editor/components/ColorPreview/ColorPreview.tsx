import React from "react";
import classes from "./ColorPreview.module.css";
import clsx from "clsx";

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
    <input
      type="color"
      className={clsx(classes.Swatch, className)}
      value={color}
      data-size={size}
      disabled
      {...attributes}
    />
  );
};

ColorPreview.defaultProps = {
  size: "small",
} as Partial<IColorPreviewProps>;
