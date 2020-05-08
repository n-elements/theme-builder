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

export default function EditorColours() {
  const intl = useIntl();
  const location = useLocation();
  const variables = useVariables(location.pathname);

  return (
    <Switch>
      <Route path={routes.editor.colours}>
        <EditorWrapper>
          <EditorHeader
            title={intl.formatMessage(messages.title)}
            subtitle={intl.formatMessage(messages.subtitle)}
          />
          <div className={classes.ColorsList}>
            <AnimatePresence>
              {variables.map((variable, index) => (
                <motion.div
                  key={variable._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  positionTransition={{ ease: "easeOut" }}
                >
                  <ColorSwatch
                    key={index}
                    propName={variable.name}
                    value={variable.value}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </EditorWrapper>
      </Route>
    </Switch>
  );
}
