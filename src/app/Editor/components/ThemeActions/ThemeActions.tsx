import React from "react";
import classes from "./ThemeActions.module.css";
import clsx from "clsx";
import { Button } from "@components/Button";
import { Undo } from "@components/Icons/16x";
import useThemeReset from "@hooks/useThemeReset";
import useThemeDownload from "@hooks/useThemeDownload";

export interface IThemeActionsProps extends PropsClass {}

export const ThemeActions = function ({
  className,
  ...attributes
}: IThemeActionsProps) {
  const handleDownload = useThemeDownload();
  const handleReset = useThemeReset();

  return (
    <div className={clsx(classes.ThemeActions, className)} {...attributes}>
      <Button onClick={handleReset} secondary>
        <Undo />
        Reset
      </Button>
      <Button onClick={handleDownload}>Download Theme</Button>
    </div>
  );
};
