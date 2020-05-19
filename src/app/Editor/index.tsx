import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import * as routes from "./routes";
import { EditorDocument } from "./components/EditorDocument";
import { EditorColours } from "./components/EditorColours";
import EditorElements from "./components/EditorElements";
import { EditorTypography } from "./components/EditorTypography";
import { Toolbar } from "./components/Toolbar";
import { ThemeActions } from "./components/ThemeActions";
import { Canvas } from "./components/Canvas";
import ToolbarContent from "./components/ToolbarContent";

export default function Editor() {
  return (
    <>
      <Toolbar actions={<ThemeActions />} toolbarContent={<ToolbarContent />} />
      <Canvas>
        <Switch>
          <Route component={EditorColours} path={routes.colours} />
          <Route component={EditorElements} path={routes.elements} />
          <Route component={EditorDocument} path={routes.document} />
          <Route component={EditorTypography} path={routes.typography} />
          <Redirect exact from={routes.root} to={routes.colours} />
        </Switch>
      </Canvas>
    </>
  );
}
