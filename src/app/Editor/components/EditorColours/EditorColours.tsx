import React from "react";
import routes from "@routes";
import withCustomVariables from "@app/Editor/hocs/withCustomVariables";
import { AnimatePresence } from "framer-motion";
import { defineMessages, useIntl } from "react-intl";
import { Route, Switch, useLocation } from "react-router-dom";
import useVariables from "../../hooks/useVariables";
import EditorColoursItem from "../EditorColoursItem";
import { EditorHeader } from "../EditorHeader";
import { EditorWrapper } from "../EditorWrapper";
import classes from "./EditorColours.module.css";
import { VariableArray } from "@store/theming/types";

const messages = defineMessages({
  title: {
    defaultMessage: "Colors",
    id: "app.Editor.components.EditorColours.title",
  },
  subtitle: {
    defaultMessage: "Add your custom colors and reuse them across elements",
    id: "app.Editor.components.EditorColours.subtitle",
  },
});

const Preview = withCustomVariables(
  ({ variables }: { variables: VariableArray }) => (
    <div className={classes.ColorsList}>
      <AnimatePresence initial={false}>
        {variables.map((variable) => (
          <EditorColoursItem key={variable._id} variable={variable} />
        ))}
      </AnimatePresence>
    </div>
  )
);

export const EditorColours = function () {
  const intl = useIntl();
  const location = useLocation();
  const variables = useVariables(location.pathname);

  return (
    <Switch>
      <Route path={routes.editor.colours}>
        <EditorWrapper
          header={
            <EditorHeader
              title={intl.formatMessage(messages.title)}
              subtitle={intl.formatMessage(messages.subtitle)}
            />
          }
        >
          <Preview variables={variables} />
        </EditorWrapper>
      </Route>
    </Switch>
  );
};
