import React, { ReactElement, ComponentPropsWithRef } from "react";
import classes from "./VariableSearch.module.css";
import { defineMessages, useIntl } from "react-intl";
import clsx from "clsx";

const messages = defineMessages({
  searchPlaceholder: {
    defaultMessage: "Search variable",
    id: "app.Editor.components.VariableSearch.searchPlaceholder",
  },
});

export interface IVariableSearchProps
  extends Omit<ComponentPropsWithRef<"div">, "children"> {
  children:
    | ReactElement<HTMLOptionElement>
    | Array<ReactElement<HTMLOptionElement>>;
}

export const VariableSearch = function ({
  children,
  className,
  ...attributes
}: IVariableSearchProps) {
  const intl = useIntl();

  return (
    <div className={clsx(classes.VariableSearch, className)} {...attributes}>
      <input
        type="text"
        list="variables"
        placeholder={intl.formatMessage(messages.searchPlaceholder)}
      />
      <datalist id="variables">{children}</datalist>
    </div>
  );
};
