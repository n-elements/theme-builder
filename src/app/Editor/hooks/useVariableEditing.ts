import actions from "@store/actions";
import { IVariable, VariableType } from "@store/theming/types";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import useVariables from "./useVariables";
import useVariablesCounter from "./useVariablesCounter";

function createAdd(dispatch: Dispatch, domain: string) {
  return (name: string, type: VariableType) => {
    dispatch(
      actions.theming.addVariable({
        domain,
        name,
        type,
        value: defaultVariableValue(type),
      })
    );
  };
}

function createaddReferenceToVariable(dispatch: Dispatch) {
  return (id?: string, externalId?: string) =>
    dispatch(actions.theming.addReferenceToVariable({ id, externalId }));
}

function createDelete(dispatch: Dispatch) {
  return (variable: IVariable) =>
    dispatch(actions.theming.deleteVariable(variable));
}

function createUpdate(dispatch: Dispatch) {
  return (variable: IVariable) =>
    dispatch(actions.theming.updateVariable(variable));
}

function defaultVariableValue(type: VariableType): string {
  switch (type) {
    case "color":
      return `#${Math.random().toString(16).substr(-6)}`;
    default:
      return "";
  }
}

export default function useVariableEditing(domain: string) {
  const counter = useVariablesCounter();
  const dispatch = useDispatch();
  const list = useVariables(domain);

  return {
    add: createAdd(dispatch, domain),
    addReferenceToVariable: createaddReferenceToVariable(dispatch),
    counter,
    delete: createDelete(dispatch),
    list,
    update: createUpdate(dispatch),
  };
}
