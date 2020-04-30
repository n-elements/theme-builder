import useVariableEditing from "@app/Editor/hooks/useVariableEditing";
import { Button } from "@components/Button";
import routes from "@routes";
import React from "react";
import { defineMessages, useIntl } from "react-intl";
import classes from "./AddVariable.module.css";

export interface IAddVariableProps extends PropsClass {}

const messages = defineMessages({
  add: {
    defaultMessage: "Add item",
    id: "app.Editor.components.AddVariable.add",
  },
  varname: {
    defaultMessage: "my-colour-{length}",
    id: "app.Editor.components.AddVariable.varname",
  },
});

export default function AddVariable({
  className,
  ...attributes
}: IAddVariableProps) {
  const intl = useIntl();
  const variables = useVariableEditing(routes.editor.colours);
  const nextname = intl.formatMessage(messages.varname, {
    length: variables.list.length,
  });

  return (
    <div className={classes.AddVariable} {...attributes}>
      <Button onClick={() => variables.add(nextname, "color")} secondary small>
        {intl.formatMessage(messages.add)}
      </Button>
    </div>
  );
}
