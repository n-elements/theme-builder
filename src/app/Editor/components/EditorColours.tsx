import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";
import Button from "@components/Button";

export default function EditorColours() {
  return (
    <Switch>
      <Button>asd</Button>
      <Route path={routes.editor.colours}>Editor colours</Route>
    </Switch>
  );
}
