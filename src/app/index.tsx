import React from "react";
import withApplicationInit from "../hocs/withApplicationInit";
import { RouteMapper } from "./RouteMapper";
import { ShellLayout } from "@components/Layouts/ShellLayout";
import { AppToolbar } from "@components/AppToolbar";
import { AppNavigation } from "@components/AppNavigation";

function App() {
  return (
    <ShellLayout
      sidebarArea={<AppNavigation />}
      toolbarArea={<AppToolbar>edita qui edita li</AppToolbar>}
      actions={<div>ACTIONS</div>}
      canvasArea={<RouteMapper />}
    />
  );
}

export default withApplicationInit(App);
