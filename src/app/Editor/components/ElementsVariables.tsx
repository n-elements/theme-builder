import React from "react";
import { Expander } from "@components/Expander";
import useElementsVariables from "../hooks/useElementsVariables";

export default function ElementsVariables() {
  const elementsvars = useElementsVariables();

  return (
    <div ne-details-group="true">
      {elementsvars.elements.map((name, index) => (
        <Expander summary={name}></Expander>
      ))}
    </div>
  );
}
