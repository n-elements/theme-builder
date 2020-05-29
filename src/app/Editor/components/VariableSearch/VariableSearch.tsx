import useRelatedVariables from "@app/Editor/hooks/useRelatedVariables";
import { OnChangeRelationHandler } from "@app/Editor/types/fields";
import { IVariable } from "@store/theming/types";
import clsx from "clsx";
import React, { ComponentPropsWithRef } from "react";
import { defineMessages, useIntl } from "react-intl";
import { Maybe, Option } from "tiinvo";
import classes from "./VariableSearch.module.css";

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
  const relatedVariables = useRelatedVariables(variable);

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
          <option key={index} value={variable.name}></option>
        ))}
      </datalist>
    </div>
  );
};
