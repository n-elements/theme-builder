import actions from "@store/actions";
import { IVariable, VariableType } from "@store/theming/types";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import useVariables from "./useVariables";

function createAdd(dispatch: Dispatch, group: string) {
  return (name: string, type: VariableType) => {
    dispatch(
      actions.theming.addVariable({
        domain: group,
        name,
        type,
      })
    );
  };
}

function createDelete(dispatch: Dispatch) {
  return (variable: IVariable) =>
    dispatch(actions.theming.deleteVariable(variable));
}

function createUpdate(dispatch: Dispatch) {
  return (variable: IVariable) =>
    dispatch(actions.theming.updateVariable(variable));
}

export default function useVariableEditing(domain: string) {
  const dispatch = useDispatch();
  const list = useVariables(domain);

  return {
    add: createAdd(dispatch, domain),
    delete: createDelete(dispatch),
    list,
    update: createUpdate(dispatch),
  };
}
