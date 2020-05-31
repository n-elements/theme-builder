import routes from "@routes";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { Route, Switch, useLocation } from "react-router-dom";
import useVariables from "../../hooks/useVariables";
import EditorColoursItem from "../EditorColoursItem";
import { EditorHeader } from "../EditorHeader";
import { EditorWrapper } from "../EditorWrapper";
import classes from "./EditorColours.module.css";
import clsx from "clsx";
import useCSSVariables from "@app/Editor/hooks/useCSSVariables";

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

export const EditorColours = function () {
  const intl = useIntl();
  const location = useLocation();
  const variables = useVariables(location.pathname);
  const cssvariables = useCSSVariables();

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
          <div className={clsx(classes.ColorsList, cssvariables)}>
            <AnimatePresence>
              {variables.map((variable) => (
                <EditorColoursItem key={variable._id} variable={variable} />
              ))}
            </AnimatePresence>
          </div>
        </EditorWrapper>
      </Route>
    </Switch>
  );
};
