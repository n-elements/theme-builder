import React, {
  ReactElement,
  ComponentPropsWithRef,
  ChangeEventHandler,
} from "react";
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
  extends Omit<ComponentPropsWithRef<"div">, "children" | "onChange"> {
  children:
    | ReactElement<HTMLOptionElement>
    | Array<ReactElement<HTMLOptionElement>>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const VariableSearch = function ({
  children,
  className,
  onChange,
  ...attributes
}: IVariableSearchProps) {
  const intl = useIntl();

  return (
    <div className={clsx(classes.VariableSearch, className)} {...attributes}>
      <input
        onChange={onChange}
        type="text"
        list="variables"
        placeholder={intl.formatMessage(messages.searchPlaceholder)}
      />
      <datalist id="variables">{children}</datalist>
    </div>
  );
};
