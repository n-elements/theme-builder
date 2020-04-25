import React from "react";
import withApplicationInit from "../hocs/withApplicationInit";
import { RouteMapper } from "./RouteMapper";
import { ShellLayout } from "@components/Layouts/ShellLayout";
import { AppToolbar } from "@components/AppToolbar";
import { AppNavigation } from "@components/AppNavigation";
import { ThemeActions } from "@components/ThemeActions";
import { PropItem } from "@components/PropItem";

function App() {
  return (
    <ShellLayout
      sidebarArea={<AppNavigation />}
      toolbarArea={
        <AppToolbar>
          <PropItem
            type="color"
            propName="sample-prop"
            propValue="hsla(0deg 0% 0% / 100%)"
          />
          <PropItem
            type="color"
            showActions
            propName="sample-prop"
            propValue="hsla(0deg 0% 0% / 100%)"
          />
        </AppToolbar>
      }
      actions={<ThemeActions />}
      canvasArea={<RouteMapper />}
    />
  );
}

export default withApplicationInit(App);
