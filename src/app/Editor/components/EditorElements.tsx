import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";

export default function EditorElements() {
  return (
    <Switch>
      <Route path={routes.editor.elements}>Editor elements</Route>
    </Switch>
  );
}
