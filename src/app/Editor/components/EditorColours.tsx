import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";

export default function EditorColours() {
  return (
    <Switch>
      <Route path={routes.editor.colours}>Editor colours</Route>
    </Switch>
  );
}
