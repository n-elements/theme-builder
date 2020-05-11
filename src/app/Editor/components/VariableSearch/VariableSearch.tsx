import React, {
  ReactElement,
  ComponentPropsWithRef,
  ChangeEventHandler,
} from "react";
import classes from "./VariableSearch.module.css";
import { defineMessages, useIntl } from "react-intl";
import clsx from "clsx";
import { OnChangeRelationHandler } from "@app/Editor/types/fields";
import { IVariable } from "@store/theming/types";
import useRelatedVariables from "@app/Editor/hooks/useRelatedVariables";
import { formatVariableName } from "@app/Editor/helpers/variable";
import { Option, Maybe } from "tiinvo";

const messages = defineMessages({
  searchPlaceholder: {
    defaultMessage: "Search variable",
    id: "app.Editor.components.VariableSearch.searchPlaceholder",
  },
});

export interface IVariableSearchProps
  extends Omit<ComponentPropsWithRef<"div">, "children"> {
  onChangeRelation: OnChangeRelationHandler;
  variable: IVariable;
}

export const VariableSearch = function ({
  className,
  onChangeRelation,
  variable,
  ...attributes
}: IVariableSearchProps) {
  const intl = useIntl();
  const relatedVariables = useRelatedVariables(variable.domain, variable.name);

  return (
    <div
      className={clsx(classes.VariableSearch, className)}
      {...attributes}
      hidden={Maybe(relatedVariables.length).isNothing()}
    >
      <input
        onChange={(event) => {
          Option(onChangeRelation).mapOrElse(
            () => void 0,
            (fn) => fn(event.target.value)
          );
        }}
        type="text"
        list="variables"
        placeholder={intl.formatMessage(messages.searchPlaceholder)}
      />
      <datalist id="variables">
        {relatedVariables.map((variable, index) => (
          <option key={index} value={variable.name}>
            {formatVariableName(variable.name)}
          </option>
        ))}
      </datalist>
    </div>
  );
};
