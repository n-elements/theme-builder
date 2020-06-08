import React, { ReactNode } from "react";
import classes from "./ButtonsGroup.module.css";
import { useIntl, defineMessages } from "react-intl";

export interface IButtonsGroupProps {
  children: ReactNode;
}

const messages = defineMessages({
  ariaLabel: {
    defaultMessage: "Set the value unit",
    id: "components.ButtonsGroup.ariaLabel",
  },
});

export const ButtonsGroup = ({ children }: IButtonsGroupProps) => {
  const intl = useIntl();

  return (
    <div
      className={classes.ButtonsGroup}
      role="radiogroup"
      aria-label={intl.formatMessage(messages.ariaLabel)}
    >
      {children}
    </div>
  );
};
