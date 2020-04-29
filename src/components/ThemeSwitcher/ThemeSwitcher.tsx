import React from "react";
import classes from "./ThemeSwitcher.module.css";
import useThemeModeSwitch from "@hooks/useThemeModeSwitch";
import { defineMessages, useIntl } from "react-intl";
import clsx from "clsx";
import { Theme } from "@store/config";
import { Helmet } from "react-helmet";
import { Sun, Moon } from "@components/Icons/16x";

export interface IThemeSwitcherProps extends PropsClass {}

const messages = defineMessages({
  auto: {
    defaultMessage: "Auto",
    id: "components.ThemeSwitcher.auto",
  },
  dark: {
    defaultMessage: "Dark",
    id: "components.ThemeSwitcher.dark",
  },
  light: {
    defaultMessage: "Light",
    id: "components.ThemeSwitcher.light",
  },
});

export const ThemeSwitcher = function ({
  className,
  ...attributes
}: IThemeSwitcherProps) {
  const intl = useIntl();
  const theme = useThemeModeSwitch();
  const createClickHandler = (type: Theme) => () => theme.change(type);

  return (
    <div className={clsx(classes.ThemeSwitcher, className)} {...attributes}>
      <Helmet
        htmlAttributes={{
          "data-theme": theme.type,
        }}
      />
      <button
        className={classes.ThemeTrigger}
        onClick={createClickHandler("auto")}
      >
        <small>{intl.formatMessage(messages.auto)}</small>
      </button>
      <button
        className={classes.ThemeTrigger}
        onClick={createClickHandler("light")}
      >
        <Sun />
      </button>
      <button
        className={classes.ThemeTrigger}
        onClick={createClickHandler("dark")}
      >
        <Moon />
      </button>
    </div>
  );
};
