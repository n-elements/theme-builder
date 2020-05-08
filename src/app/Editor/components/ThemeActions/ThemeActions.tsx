import React from "react";
import classes from "./ThemeActions.module.css";
import clsx from "clsx";
import { Button } from "@components/Button";
import { Undo } from "@components/Icons/16x";
import useThemeReset from "@hooks/useThemeReset";
import useThemeDownload from "@hooks/useThemeDownload";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  downloadTheme: {
    defaultMessage: "Download theme",
    id: "app.Editor.components.ThemeActions.downloadTheme",
  },
  reset: {
    defaultMessage: "Reset",
    id: "app.Editor.components.ThemeActions.reset",
  },
});

export interface IThemeActionsProps extends PropsClass {}

export const ThemeActions = function ({
  className,
  ...attributes
}: IThemeActionsProps) {
  const intl = useIntl();
  const handleDownload = useThemeDownload();
  const handleReset = useThemeReset();

  return (
    <div className={clsx(classes.ThemeActions, className)} {...attributes}>
      <Button onClick={handleReset} secondary>
        <Undo />
        {intl.formatMessage(messages.reset)}
      </Button>
      <Button onClick={handleDownload}>
        {intl.formatMessage(messages.downloadTheme)}
      </Button>
    </div>
  );
};
