import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as routes from "../routes";
import ColoursVariables from "./ColoursVariables";
import ElementsVariables from "./ElementsVariables";
import DocumentVariables from "./DocumentVariables";
import TypographyVariables from "./TypographyVariables";

export default function ToolbarArea() {
  return (
    <Switch>
      <Route component={ColoursVariables} path={routes.colours} />
      <Route component={DocumentVariables} path={routes.document} />
      <Route component={ElementsVariables} path={routes.elements} />
      <Route component={TypographyVariables} path={routes.typography} />
      <Redirect exact from={routes.root} to={routes.colours} />
    </Switch>
  );
}
