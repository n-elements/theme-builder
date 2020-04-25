import React from "react";
import withApplicationInit from "../hocs/withApplicationInit";
import { RouteMapper } from "./RouteMapper";
import { ShellLayout } from "@components/Layouts/ShellLayout";
import { AppToolbar } from "@components/AppToolbar";
import { AppNavigation } from "@components/AppNavigation";
import { ThemeActions } from "@components/ThemeActions";

function App() {
  return (
    <ShellLayout
      sidebarArea={<AppNavigation />}
      toolbarArea={<AppToolbar>edita qui edita li</AppToolbar>}
      actions={<ThemeActions />}
      canvasArea={<RouteMapper />}
    />
  );
}

export default withApplicationInit(App);
