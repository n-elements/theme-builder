import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as routes from "../routes";
import ColoursVariables from "./ColoursVariables";
import ElementsVariables from "./ElementsVariables";
import SettingsVariables from "./SettingsVariables";
import TypographyVariables from "./TypographyVariables";

export default function ToolbarArea() {
  return (
    <Switch>
      <Route component={ColoursVariables} path={routes.colours} />
      <Route component={SettingsVariables} path={routes.settings} />
      <Route component={ElementsVariables} path={routes.elements} />
      <Route component={TypographyVariables} path={routes.typography} />
      <Redirect exact from={routes.root} to={routes.colours} />
    </Switch>
  );
}
