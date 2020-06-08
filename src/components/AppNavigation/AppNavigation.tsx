import { Colors, Document, Elements, Typography } from "@components/Icons/24x";
import routes from "@routes";
import clsx from "clsx";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import classes from "./AppNavigation.module.css";
import { useIntl, defineMessages } from "react-intl";

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

const messages = defineMessages({
  colorSettings: {
    defaultMessage: "Colors settings",
    id: "components.AppNavigation.colorSettings",
  },
  documentSettings: {
    defaultMessage: "Document settings",
    id: "components.AppNavigation.documentSettings",
  },
  elementsSettings: {
    defaultMessage: "Elements settings",
    id: "components.AppNavigation.elementsSettings",
  },
  typographySettings: {
    defaultMessage: "Typography settings",
    id: "components.AppNavigation.typographySettings",
  },
});

export const AppNavigation = function ({
  className,
  ...attributes
}: IAppNavigationProps) {
  const intl = useIntl();

  return (
    <nav className={clsx(classes.AppNavigation, className)} {...attributes}>
      <AppNavigationItem
        to={routes.editor.colours}
        label={intl.formatMessage(messages.colorSettings)}
      >
        <Colors />
      </AppNavigationItem>
      <AppNavigationItem
        to={routes.editor.document}
        label={intl.formatMessage(messages.documentSettings)}
      >
        <Document />
      </AppNavigationItem>
      <AppNavigationItem
        to={routes.editor.typography}
        label={intl.formatMessage(messages.typographySettings)}
      >
        <Typography />
      </AppNavigationItem>
      <AppNavigationItem
        label={intl.formatMessage(messages.elementsSettings)}
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
