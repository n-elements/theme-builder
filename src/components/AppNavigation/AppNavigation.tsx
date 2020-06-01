import { Colors, Document, Elements, Typography } from "@components/Icons/24x";
import routes from "@routes";
import clsx from "clsx";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import classes from "./AppNavigation.module.css";

export interface IAppNavigationProps extends PropsClass {}

export interface IAppNavigationItemProps
  extends Omit<NavLinkProps, "activeClassName" | "className"> {}

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
  ...attributes
}: IAppNavigationProps) {
  return (
    <nav className={clsx(classes.AppNavigation, className)} {...attributes}>
      <AppNavigationItem to={routes.editor.colours}>
        <Colors />
      </AppNavigationItem>
      <AppNavigationItem to={routes.editor.document}>
        <Document />
      </AppNavigationItem>
      <AppNavigationItem to={routes.editor.typography}>
        <Typography />
      </AppNavigationItem>
      <AppNavigationItem
        isActive={(_, location) =>
          location.pathname.includes(routes.editor.elementsroot)
        }
        to={routes.editor.elementsroot}
      >
        <Elements />
      </AppNavigationItem>
    </nav>
  );
};
