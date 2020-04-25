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

export const Button = function (props: IButtonProps) {
  return (
    <button
      type="button"
      className={clsx(classes.Button, props.className)}
      data-secondary={props.secondary}
      data-small={props.small}
      adia-disabled={props.disabled}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};
