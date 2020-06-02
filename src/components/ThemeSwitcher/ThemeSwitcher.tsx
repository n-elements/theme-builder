import React from "react";
import { defineMessages, useIntl } from "react-intl";
import classes from "./ThemeSwitcher.module.css";
import useThemeModeSwitch from "@hooks/useThemeModeSwitch";
import clsx from "clsx";
import { Theme } from "@store/config";
import { Helmet } from "react-helmet";
import { Auto, Sun, Moon } from "@components/Icons/16x";

const messages = defineMessages({
  auto: {
    defaultMessage: "Set theme basedd on OS preferences",
    id: "components.ThemeSwitcer.auto",
  },
  light: {
    defaultMessage: "Set light theme",
    id: "components.ThemeSwitcer.light",
  },
  dark: {
    defaultMessage: "Set dark theme",
    id: "components.ThemeSwitcer.dark",
  },
});

export interface IThemeSwitcherProps extends PropsClass {}

export const ThemeSwitcher = function ({
  className,
  ...attributes
}: IThemeSwitcherProps) {
  const intl = useIntl();
  const theme = useThemeModeSwitch();
  const createClickHandler = (type: Theme) => () => theme.change(type);
  const currentTheme = theme.type;

  return (
    <div className={clsx(classes.ThemeSwitcher, className)} {...attributes}>
      <Helmet
        htmlAttributes={{
          "data-theme": currentTheme,
        }}
      />
      <button
        aria-current={currentTheme === "auto"}
        className={classes.ThemeTrigger}
        aria-label={intl.formatMessage(messages.auto)}
        onClick={createClickHandler("auto")}
      >
        <Auto />
      </button>
      <button
        aria-current={currentTheme === "light"}
        className={classes.ThemeTrigger}
        aria-label={intl.formatMessage(messages.dark)}
        onClick={createClickHandler("light")}
      >
        <Sun />
      </button>
      <button
        aria-current={currentTheme === "dark"}
        aria-label={intl.formatMessage(messages.dark)}
        className={classes.ThemeTrigger}
        onClick={createClickHandler("dark")}
      >
        <Moon />
      </button>
    </div>
  );
};
