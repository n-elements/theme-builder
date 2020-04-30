import React from "react";
import { useLocation } from "react-router-dom";
import useVariables from "../hooks/useVariables";
import { Variable } from "./Variable";

export interface IVariableListProps {
  showActions?: boolean;
}

export default function VariableList(props: IVariableListProps) {
  const location = useLocation();
  const variables = useVariables(location.pathname);

  return (
    <>
      {variables.map((variable, index) => (
        <Variable
          key={index}
          showActions={props.showActions}
          variable={variable}
        />
      ))}
    </>
  );
}
