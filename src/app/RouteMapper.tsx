import { Switch, Redirect, Route } from "react-router-dom";
import React from "react";
import routes from "@routes";
import Editor from "./Editor";

export const RouteMapper = function () {
  return (
    <Switch>
      <Route component={Editor} path={routes.editor.root} />
      <Redirect from={routes.root} to={routes.editor.colours} />
    </Switch>
  );
};
