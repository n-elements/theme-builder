import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";

export default function EditorTypography() {
  return (
    <Switch>
      <Route path={routes.editor.typography}>Editor typography</Route>
    </Switch>
  );
}
