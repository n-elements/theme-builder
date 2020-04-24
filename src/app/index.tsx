import React from "react";
import withApplicationInit from "../hocs/withApplicationInit";
import { RouteMapper } from "./RouteMapper";
import { ShellLayout } from "@components/Layouts/ShellLayout";
import ApplicationEditableSettingsContainer from "@components/ApplicationEditableSettingsContainer";
import { AppNavigation } from "@components/AppNavigation";

function App() {
  return (
    <ShellLayout
      sidebarArea={<AppNavigation />}
      toolbarArea={
        <ApplicationEditableSettingsContainer>
          edita qui edita li
        </ApplicationEditableSettingsContainer>
      }
      canvasArea={<RouteMapper />}
    />
  );
}

export default withApplicationInit(App);
