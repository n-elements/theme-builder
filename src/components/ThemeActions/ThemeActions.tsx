import React from "react";
import classes from "./ThemeActions.module.css";
import clsx from "clsx";
import { Button } from "@components/Button";
import { Undo } from "@components/Icons/16x";

export interface IThemeActionsProps extends PropsClass {}

export const ThemeActions = function (props: IThemeActionsProps) {
  return (
    <div className={clsx(classes.ThemeActions, props.className)}>
      <Button secondary>
        <Undo />
        Reset
      </Button>
      <Button>Download Theme</Button>
    </div>
  );
};
