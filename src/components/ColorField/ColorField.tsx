import React from "react";
import classes from "./ColorField.module.css";
import clsx from "clsx";
import { FieldWrapper } from "@components/FieldWrapper";
import { Color } from "react-color";
// import { ChromePicker, Color, ColorResult } from "react-color";

export interface IColorFieldProps extends PropsClass {
  defaultValue?: Color;
  readOnly?: boolean;
}

export const ColorField = function ({
  className,
  defaultValue,
  readOnly,
  ...attributes
}: IColorFieldProps) {
  return (
    <div className={clsx(classes.ColorField, className)} {...attributes}>
      <FieldWrapper>
        <input type="text" readOnly={readOnly} />
        <span className={classes.ColorPreview}></span>
      </FieldWrapper>
    </div>
  );
};
