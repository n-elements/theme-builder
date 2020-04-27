import React, { ReactNode } from "react";
import { Logo } from "@components/Logo";
import clsx from "clsx";
import classes from "./AppHeader.module.css";
import { Github } from "@components/Icons/16x";
import { Edit } from "@components/Icons/12x";
import { Link } from "react-router-dom";
import routes from "@routes";

export interface IAppHeaderProps extends PropsClass {
  children?: ReactNode;
}

export const AppHeader = function ({ className, ...props }: IAppHeaderProps) {
  return (
    <header className={clsx(classes.AppHeader, className)} {...props}>
      <Link to={routes.root} className={classes.LogoWrapper}>
        <Logo width={20} />
      </Link>
      <div className={classes.HeaderContent}>
        {/* pencil icon */}
        <div>
          <Edit />
          theme-name
        </div>
        <a
          className={classes.HeaderLink}
          href="https://github.com/n-elements/core"
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
