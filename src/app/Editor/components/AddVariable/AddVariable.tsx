import useVariableEditing from "@app/Editor/hooks/useVariableEditing";
import { Button } from "@components/Button";
import routes from "@routes";
import React from "react";
import { defineMessages, useIntl } from "react-intl";
import classes from "./AddVariable.module.css";

export interface IAddVariableProps {}

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

export default function AddVariable() {
  const intl = useIntl();
  const variables = useVariableEditing(routes.editor.colours);
  const nextname = intl.formatMessage(messages.varname, {
    length: variables.list.length,
  });

  return (
    <Button
      className={classes.AddVariable}
      onClick={() => variables.add(nextname, "color")}
      secondary
    >
      {intl.formatMessage(messages.add)}
    </Button>
  );
}
