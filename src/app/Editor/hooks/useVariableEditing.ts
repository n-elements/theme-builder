import actions from "@store/actions";
import { IVariable, VariableType } from "@store/theming/types";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import useVariables from "./useVariables";
import useVariablesCounter from "./useVariablesCounter";
import { Option } from "tiinvo";

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

function createClone(dispatch: Dispatch) {
  return (variable: IVariable) =>
    dispatch(actions.theming.cloneVariable(variable));
}

function createaddReferenceToVariable(dispatch: Dispatch) {
  return (id?: string, externalVariableName?: string) =>
    dispatch(
      actions.theming.addReferenceToVariable({ id, externalVariableName })
    );
}

function createDelete(dispatch: Dispatch) {
  return (variable: IVariable) =>
    dispatch(actions.theming.deleteVariable(variable));
}

function createDeleteReferenceToVariable(dispatch: Dispatch) {
  return (variable: IVariable) =>
    Option(variable._referenceId).mapOrElse(
      () => void 0,
      () => dispatch(actions.theming.deleteReference(variable))
    );
}

function createUpdate(dispatch: Dispatch) {
  return (variable: IVariable) =>
    dispatch(actions.theming.updateVariable(variable));
}

function defaultVariableValue(type: VariableType): string {
  switch (type) {
    case "color":
      const h = Math.floor(Math.random() * (360 - 1) + 1);
      const s = Math.floor(Math.random() * (100 - 60) + 60);
      const l = Math.floor(Math.random() * (95 - 30) + 30);
      return `hsl(${h}, ${s}%, ${l}%)`;
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
    clone: createClone(dispatch),
    counter,
    delete: createDelete(dispatch),
    deleteReferenceToVariable: createDeleteReferenceToVariable(dispatch),
    list,
    update: createUpdate(dispatch),
  };
}
