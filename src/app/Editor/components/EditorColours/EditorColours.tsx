import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";
import { useLocation } from "react-router-dom";
import useVariables from "../../hooks/useVariables";
import { defineMessages, useIntl } from "react-intl";
import { motion, AnimatePresence } from "framer-motion";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { ColorSwatch } from "../ColorSwatch";
import classes from "./EditorColours.module.css";
import EditorColoursItem from "../EditorColoursItem";

const messages = defineMessages({
  title: {
    defaultMessage: "Colors",
    id: "app.Editor.components.EditorColours.title",
  },
  subtitle: {
    defaultMessage: "List of all the available colors",
    id: "app.Editor.components.EditorColours.subtitle",
  },
});

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
          <div className={classes.ColorsList}>
            <AnimatePresence>
              {variables.map((variable, index) => (
                <EditorColoursItem key={index} variable={variable} />
              ))}
            </AnimatePresence>
          </div>
        </EditorWrapper>
      </Route>
    </Switch>
  );
};
