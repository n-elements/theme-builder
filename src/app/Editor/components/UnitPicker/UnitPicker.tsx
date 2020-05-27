import React, { ReactNode } from "react";
import classes from "./UnitPicker.module.css";

export interface IUnitPickerProps {
  children: ReactNode;
}

export const UnitPicker = ({ children }: IUnitPickerProps) => {
  return (
    <div
      className={classes.UnitsPicker}
      role="radiogroup"
      aria-label="Set the value unit"
    >
      {children}
    </div>
  );
};
