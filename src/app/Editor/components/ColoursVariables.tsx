import React from "react";
import { AddVariable } from "./AddVariable";
import VariableList from "./VariableList";

export default function ColoursVariables() {
  return (
    <>
      <VariableList showActions />
      <AddVariable />
    </>
  );
}
