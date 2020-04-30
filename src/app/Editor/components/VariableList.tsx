import { useLocation } from "react-router-dom";
import useVariables from "../hooks/useVariables";
import React from "react";
import Variable from "./Variable";

export interface IVariableListProps {
  labelEditable?: boolean;
  removable?: boolean;
}

export default function VariableList(props: IVariableListProps) {
  const location = useLocation();
  const variables = useVariables(location.pathname);

  return (
    <>
      {variables.map((variable, index) => (
        <Variable
          key={index}
          labelEditable={props.labelEditable}
          removable={props.removable}
          variable={variable}
        />
      ))}
    </>
  );
}
