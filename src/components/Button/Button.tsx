import React, {
  ReactNode,
  PropsWithChildren,
  ButtonHTMLAttributes,
} from "react";
import clsx from "clsx";

import classes from "./Button.module.css";

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends PropsWithChildren<ButtonAttributes> {
  children: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  small?: boolean;
  disabled?: boolean;
}

export const Button = function ({
  children,
  className,
  secondary,
  small,
  disabled,
  onClick,
  ...props
}: IButtonProps) {
  return (
    <button
      type="button"
      className={clsx(classes.Button, className)}
      data-secondary={secondary}
      data-small={small}
      adia-disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
