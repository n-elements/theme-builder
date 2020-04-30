import React from "react";
import { AddVariable } from "./AddVariable";
import VariableList from "./VariableList";

export default function ColoursVariables() {
  return (
    <>
      <VariableList labelEditable removable />
      <AddVariable />
    </>
  );
}
