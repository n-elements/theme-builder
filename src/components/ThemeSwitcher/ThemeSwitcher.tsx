import React from "react";
import classes from "./ThemeSwitcher.module.css";
import useThemeModeSwitch from "@hooks/useThemeModeSwitch";
import { defineMessages, useIntl } from "react-intl";
import clsx from "clsx";
import { Helmet } from "react-helmet";

export interface IThemeSwitcherProps extends PropsClass {}

const messages = defineMessages({
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

  return (
    <div {...attributes}>
      <Helmet
        htmlAttributes={{
          "data-theme": theme.type,
        }}
      />
      <button
        className={clsx(classes.ThemeSwitcher, className)}
        onClick={theme.change}
      >
        {theme.type === "dark" && intl.formatMessage(messages.dark)}
        {theme.type === "light" && intl.formatMessage(messages.light)}
      </button>
    </div>
  );
};
