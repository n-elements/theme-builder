import React, { ReactNode } from "react";
import classes from "./ButtonsGroup.module.css";

export interface IButtonsGroupProps {
  children: ReactNode;
}

export const ButtonsGroup = ({ children }: IButtonsGroupProps) => {
  return (
    <div
      className={classes.ButtonsGroup}
      role="radiogroup"
      aria-label="Set the value unit"
    >
      {children}
    </div>
  );
};
