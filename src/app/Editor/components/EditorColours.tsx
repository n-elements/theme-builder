import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";
import { EditorWrapper } from "./EditorWrapper";
import { EditorHeader } from "./EditorHeader";

export default function EditorColours() {
  return (
    <Switch>
      <Route path={routes.editor.colours}>
        <EditorWrapper>
          <EditorHeader
            title="Colors"
            subtitle="List of all the available colors"
          />
        </EditorWrapper>
      </Route>
    </Switch>
  );
}
