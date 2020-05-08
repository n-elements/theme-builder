import React from "react";
import classes from "./ThemeSwitcher.module.css";
import useThemeModeSwitch from "@hooks/useThemeModeSwitch";
import clsx from "clsx";
import { Theme } from "@store/config";
import { Helmet } from "react-helmet";
import { Sun, Moon } from "@components/Icons/16x";
import { Auto } from "@components/Icons/16x/16x";

export interface IThemeSwitcherProps extends PropsClass {}

export const ThemeSwitcher = function ({
  className,
  ...attributes
}: IThemeSwitcherProps) {
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
        onClick={createClickHandler("auto")}
      >
        <Auto />
      </button>
      <button
        aria-current={currentTheme === "light"}
        className={classes.ThemeTrigger}
        onClick={createClickHandler("light")}
      >
        <Sun />
      </button>
      <button
        aria-current={currentTheme === "dark"}
        className={classes.ThemeTrigger}
        onClick={createClickHandler("dark")}
      >
        <Moon />
      </button>
    </div>
  );
};
