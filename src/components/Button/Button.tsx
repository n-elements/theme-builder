import React, {
  ReactNode,
  PropsWithChildren,
  ButtonHTMLAttributes,
} from "react";
import classNames from "classnames";

import classes from "./Button.module.css";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends PropsWithChildren<ButtonAttributes> {
  children: ReactNode;
  secondary?: boolean;
  small?: boolean;
}

export const Button = function ({
  className,
  children,
  secondary,
  small,
  ...props
}: IButtonProps) {
  return (
    <button
      type="button"
      className={classNames(classes.Button, className)}
      data-secondary={secondary}
      data-small={small}
      {...props}
    >
      {children}
    </button>
  );
};
