import React from "react";
import classes from "./ThemeSwitcher.module.css";
import useThemeModeSwitch from "@hooks/useThemeModeSwitch";
import { defineMessages, useIntl } from "react-intl";
import clsx from "clsx";
import { Helmet } from "react-helmet";

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

export default function ThemeSwitcher() {
  const intl = useIntl();
  const theme = useThemeModeSwitch();
  const className = clsx(
    classes.ThemeSwitcher,
    theme.type === "dark" && classes.ThemeSwitcherDark,
    theme.type === "light" && classes.ThemeSwitcherLight
  );

  return (
    <>
      <Helmet
        htmlAttributes={{
          "data-theme": theme.type,
        }}
      />
      <button className={className} onClick={theme.change}>
        {theme.type === "dark" && intl.formatMessage(messages.dark)}
        {theme.type === "light" && intl.formatMessage(messages.light)}
      </button>
    </>
  );
}
