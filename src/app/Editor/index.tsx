import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import * as routes from "./routes";
import EditorSettings from "./components/EditorSettings";
import EditorColours from "./components/EditorColours";
import EditorElements from "./components/EditorElements";
import EditorTypography from "./components/EditorTypography";
import ApplicationEditableSettingsContainer from "@components/ApplicationEditableSettingsContainer";

export default function Editor() {
  return (
    <>
      <ApplicationEditableSettingsContainer>
        edita qui edita li
      </ApplicationEditableSettingsContainer>
      <Switch>
        <Route component={EditorColours} path={routes.colours} />
        <Route component={EditorElements} path={routes.elements} />
        <Route component={EditorSettings} path={routes.settings} />
        <Route component={EditorTypography} path={routes.typography} />
        <Redirect exact from={routes.root} to={routes.colours} />
      </Switch>
    </>
  );
}
