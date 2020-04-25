import React from "react";
import classes from "./ColorField.module.css";
import clsx from "clsx";
import { FieldWrapper } from "@components/FieldWrapper";

export interface IColorFieldProps extends PropsClass {
  defaultValue?: string;
  readOnly?: boolean;
}

export const ColorField = function ({
  className,
  defaultValue,
  readOnly,
  ...props
}: IColorFieldProps) {
  return (
    <div className={clsx(classes.ColorField, className)}>
      <FieldWrapper>
        <input type="text" defaultValue={defaultValue} readOnly={readOnly} />
      </FieldWrapper>
    </div>
  );
};
