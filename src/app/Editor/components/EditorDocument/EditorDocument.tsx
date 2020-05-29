import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import classes from "./EditorDocument.module.css";

const messages = defineMessages({
  title: {
    defaultMessage: "Document Settings",
    id: "app.Editor.components.EditorDocument.title",
  },
  subtitle: {
    defaultMessage:
      "Global document configurations like root font-size and text selection color",
    id: "app.Editor.components.EditorDocument.subtitle",
  },
});

export const EditorDocument = function () {
  const intl = useIntl();

  return (
    <Switch>
      <Route path={routes.editor.document}>
        <EditorWrapper
          header={
            <EditorHeader
              title={intl.formatMessage(messages.title)}
              subtitle={intl.formatMessage(messages.subtitle)}
            />
          }
        >
          <h2>Try to select the text!</h2>
          <p className={classes.Container}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            in incidunt, id quos facere hic corrupti, quia perferendis atque
            consectetur ipsum eaque quo quod explicabo.
            <br />
            <br />
            Aspernatur repudiandae voluptas dolore impedit? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quibusdam, in incidunt, id
            quos facere hic corrupti, quia perferendis atque consectetur ipsum
            eaque quo quod explicabo. Aspernatur repudiandae voluptas dolore
            impedit?
          </p>
        </EditorWrapper>
      </Route>
    </Switch>
  );
};
