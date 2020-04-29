import React from "react";
import classes from "./ThemeSwitcher.module.css";
import useThemeModeSwitch from "@hooks/useThemeModeSwitch";
import { defineMessages, useIntl } from "react-intl";
import clsx from "clsx";
import { Theme } from "@store/config";
import { Helmet } from "react-helmet";

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
    <div {...attributes}>
      <Helmet
        htmlAttributes={{
          "data-theme": theme.type,
        }}
      />
      <button
        className={clsx(classes.ThemeSwitcher, className)}
        onClick={createClickHandler("auto")}
      >
        {intl.formatMessage(messages.auto)}
      </button>
      <button
        className={clsx(classes.ThemeSwitcher, className)}
        onClick={createClickHandler("light")}
      >
        {intl.formatMessage(messages.light)}
      </button>
      <button
        className={clsx(classes.ThemeSwitcher, className)}
        onClick={createClickHandler("dark")}
      >
        {intl.formatMessage(messages.dark)}
      </button>
    </div>
  );
};
