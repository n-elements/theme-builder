import { Colors, Document, Elements, Typography } from "@components/Icons/24x";
import routes from "@routes";
import clsx from "clsx";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import classes from "./AppNavigation.module.css";

export interface IAppNavigationProps extends PropsClass {}

export interface IAppNavigationItemProps
  extends Omit<NavLinkProps, "activeClassName" | "className"> {
  label?: string;
}

const AppNavigationItem = function ({
  children,
  to,
  label,
}: IAppNavigationItemProps) {
  return (
    <NavLink
      activeClassName={classes.Current}
      className={classes.AppNavigationItem}
      aria-label={label}
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
      <AppNavigationItem to={routes.editor.colours} label="Colors settings">
        <Colors />
      </AppNavigationItem>
      <AppNavigationItem to={routes.editor.document} label="Document settings">
        <Document />
      </AppNavigationItem>
      <AppNavigationItem
        to={routes.editor.typography}
        label="Typography settings"
      >
        <Typography />
      </AppNavigationItem>
      <AppNavigationItem
        label="Elements settings"
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
