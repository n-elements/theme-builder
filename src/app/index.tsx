import { AppNavigation } from "@components/AppNavigation";
import { ShellLayout } from "@components/ShellLayout";
import React from "react";
import withApplicationInit from "../hocs/withApplicationInit";
import { RouteMapper } from "./RouteMapper";

function App() {
  return (
    <ShellLayout canvasArea={<RouteMapper />} sidebarArea={<AppNavigation />} />
  );
}

export default withApplicationInit(App);
