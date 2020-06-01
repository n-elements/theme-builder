import { Expander } from "@components/Expander";
import React from "react";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";
import useElementsVariables from "@app/Editor/hooks/useElementsVariables";
import { Variable } from "../Variable";
import classes from "./ElementsVariables.module.css";

export function ElementsVariables() {
  type ElementsVariablesState = {
    open: boolean;
  };

  const elementsvars = useElementsVariables();
  const history = useHistory<ElementsVariablesState>();
  const match = useRouteMatch<{ element: string }>();
  const location = useLocation<ElementsVariablesState>();
  const open = location.state?.open ?? true;

  return (
    <div ne-details-group="true">
      {elementsvars.elements.map((name, index) => (
        <Expander
          open={open ? match.params.element === name : open}
          key={index}
          onExpand={() => {
            history.push(elementsvars.getRouteForElement(name!), {
              open: match.params.element === name ? !open : true,
            });
          }}
          summary={name}
        >
          {elementsvars.getVariablesForElement(name!).map((variable, index) => (
            <div className={classes.VariableItem} key={index}>
              <Variable variable={variable} />
            </div>
          ))}
        </Expander>
      ))}
    </div>
  );
}
