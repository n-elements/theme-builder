import React, { ReactNode } from "react";
import { Logo } from "@components/Logo";
import clsx from "clsx";
import classes from "./AppHeader.module.css";
import { Github } from "@components/Icons/16x";
import { Link } from "react-router-dom";

export interface IAppHeaderProps extends PropsClass {
  children?: ReactNode;
}

export const AppHeader = function ({ className, ...props }: IAppHeaderProps) {
  return (
    <header className={clsx(classes.AppHeader, className)} {...props}>
      <Link to="/" className={classes.LogoWrapper}>
        <Logo width={20} />
      </Link>
      <div className={classes.HeaderContent}>
        {/* pencil icon */}
        theme-name
        <a
          href="https://native-elements.stackblitz.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github />
          Native elements
        </a>
      </div>
    </header>
  );
};
