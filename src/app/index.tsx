import React from "react";
import withApplicationInit from "../hocs/withApplicationInit";
import RouteMapper from "./RouteMapper";
import "@native-elements/core";
import ApplicationWrapper from "@components/ApplicationWrapper";
import ApplicationHeader from "@components/ApplicationHeader";
import ApplicationContent from "@components/ApplicationContent";

function App() {
  return (
    <ApplicationWrapper>
      <ApplicationHeader />
      <ApplicationContent>
        <RouteMapper />
      </ApplicationContent>
    </ApplicationWrapper>
  );
}

export default withApplicationInit(App);
