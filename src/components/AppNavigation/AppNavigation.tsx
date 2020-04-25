import React, { ReactNode } from "react";
import clsx from "clsx";
import routes from "@routes";
import { NavLink } from "react-router-dom";
import classes from "./AppNavigation.module.css";
import { Colors, Document, Typography, Elements } from "@components/Icons/24x";

export interface IAppNavigationProps extends PropsClass {}

export interface IAppNavigationItemProps {
  children?: ReactNode;
  to: string;
}

const AppNavigationItem = function ({ children, to }: IAppNavigationItemProps) {
  return (
    <NavLink
      activeClassName={classes.Current}
      className={classes.AppNavigationItem}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export const AppNavigation = function ({
  className,
  ...props
}: IAppNavigationProps) {
  return (
    <nav className={clsx(classes.AppNavigation, className)} {...props}>
      <AppNavigationItem to={routes.editor.colours}>
        <Colors />
      </AppNavigationItem>
      <AppNavigationItem to={routes.editor.settings}>
        <Document />
      </AppNavigationItem>
      <AppNavigationItem to={routes.editor.typography}>
        <Typography />
      </AppNavigationItem>
      <AppNavigationItem to={routes.editor.elements}>
        <Elements />
      </AppNavigationItem>
    </nav>
  );
};
