import React from "react";
import classes from "./ThemeActions.module.css";
import clsx from "clsx";
import { Button } from "@components/Button";
import { Undo } from "@components/Icons/16x";

export interface IThemeActionsProps extends PropsClass {}

export const ThemeActions = function ({
  className,
  ...props
}: IThemeActionsProps) {
  return (
    <div className={clsx(classes.ThemeActions, className)} {...props}>
      <Button secondary>
        <Undo />
        Reset
      </Button>
      <Button>Download Theme</Button>
    </div>
  );
};
