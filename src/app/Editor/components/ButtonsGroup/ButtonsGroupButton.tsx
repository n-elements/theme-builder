import React from "react";
import { Button } from "@components/Button";
import classes from "./ButtonsGroupButton.module.css";

export interface ButtonsGroupButtonProps {
  unit: string;
  checked: boolean;
  onClick: () => void;
}

export const ButtonsGroupButton = ({
  unit,
  checked,
  onClick,
}: ButtonsGroupButtonProps) => {
  return (
    <Button
      role="radio"
      aria-checked={checked}
      className={classes.ButtonsGroupButton}
      secondary
      onClick={onClick}
      small
    >
      {unit}
    </Button>
  );
};
