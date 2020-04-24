import React from "react";
import withApplicationInit from "../hocs/withApplicationInit";
import RouteMapper from "./RouteMapper";
import "@native-elements/core";
import { ShellLayout } from "@components/Layouts/ShellLayout";

function App() {
  return (
    <ShellLayout>
      <RouteMapper />
    </ShellLayout>
  );
}

export default withApplicationInit(App);
