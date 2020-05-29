import { Expander } from "@components/Expander";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import useElementsVariables from "../hooks/useElementsVariables";
import { Variable } from "./Variable";

export default function ElementsVariables() {
  const elementsvars = useElementsVariables();
  const history = useHistory();
  const match = useRouteMatch<{ element: string }>();

  return (
    <div ne-details-group="true">
      {elementsvars.elements.map((name, index) => (
        <Expander
          open={match.params.element === name}
          key={index}
          onExpand={() => {
            history.push(elementsvars.getRouteForElement(name!));
          }}
          summary={name}
        >
          {elementsvars.getVariablesForElement(name!).map((variable, index) => (
            <Variable key={index} variable={variable} />
          ))}
        </Expander>
      ))}
    </div>
  );
}
