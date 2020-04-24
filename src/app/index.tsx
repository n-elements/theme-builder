import React from "react";
import withApplicationInit from "../hocs/withApplicationInit";
import RouteMapper from "./RouteMapper";
import { ShellLayout } from "@components/Layouts/ShellLayout";
import ApplicationContent from "@components/ApplicationContent";
import ApplicationEditableSettingsContainer from "@components/ApplicationEditableSettingsContainer";

function App() {
  return (
    <ShellLayout
      sidebar={<ApplicationContent />}
      toolbar={
        <ApplicationEditableSettingsContainer>
          edita qui edita li
        </ApplicationEditableSettingsContainer>
      }
      canvas={<RouteMapper />}
    />
  );
}

export default withApplicationInit(App);
