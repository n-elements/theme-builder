import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";

export default function EditorSettings() {
  return (
    <Switch>
      <Route path={routes.editor.settings}>Editor settings</Route>
    </Switch>
  );
}
