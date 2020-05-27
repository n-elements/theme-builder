import React from "react";
import { Button } from "@components/Button";
import classes from "./UnitPickerButton.module.css";

export interface UnitPickerButtonProps {
  unit: string;
  checked: boolean;
  onClick: () => void;
}

export const UnitPickerButton = ({
  unit,
  checked,
  onClick,
}: UnitPickerButtonProps) => {
  return (
    <Button
      role="radio"
      aria-checked={checked}
      className={classes.UnitPickerButton}
      secondary
      onClick={onClick}
      small
    >
      {unit}
    </Button>
  );
};
