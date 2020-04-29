import React from "react";
import classes from "./ThemeActions.module.css";
import clsx from "clsx";
import { Button } from "@components/Button";
import { Undo } from "@components/Icons/16x";

export interface IThemeActionsProps extends PropsClass {}

export const ThemeActions = function ({
  className,
  ...attributes
}: IThemeActionsProps) {
  return (
    <div className={clsx(classes.ThemeActions, className)} {...attributes}>
      <Button secondary>
        <Undo />
        Reset
      </Button>
      <Button>Download Theme</Button>
    </div>
  );
};
