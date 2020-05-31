import React from "react";
import { Button } from "@components/Button";
import classes from "./ButtonsGroupButton.module.css";

export interface ButtonsGroupButtonProps {
  text: string;
  checked: boolean;
  onClick: () => void;
}

export const ButtonsGroupButton = ({
  text,
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
      {text}
    </Button>
  );
};
