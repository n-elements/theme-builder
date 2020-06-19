import React, { ReactNode } from "react";
import { Logo } from "@components/Logo";
import clsx from "clsx";
import classes from "./AppHeader.module.css";
import { Link } from "react-router-dom";
import routes from "@routes";
import { ThemeSwitcher } from "@components/ThemeSwitcher";
import { ThemeName } from "@app/Editor/components/ThemeName";

export interface IAppHeaderProps extends PropsClass {
  children?: ReactNode;
}

export const AppHeader = function ({
  className,
  ...attributes
}: IAppHeaderProps) {
  return (
    <header className={clsx(classes.AppHeader, className)} {...attributes}>
      <Link to={routes.root} className={classes.LogoWrapper}>
        <Logo width={20} />
      </Link>
      <div className={classes.HeaderContent}>
        <ThemeName />
        <div className={classes.HeaderActions}>
          <ThemeSwitcher />
          <a
            className={classes.HeaderLink}
            href="https://native-elements.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </a>
        </div>
      </div>
    </header>
  );
};
