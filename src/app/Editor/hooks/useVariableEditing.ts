import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import actions from "@store/actions";
import { VariableType, IVariable } from "@store/theming/types";

function createAdd(dispatch: Dispatch, group: string) {
  return (name: string, type: VariableType) => {
    dispatch(
      actions.theming.addVariable({
        group,
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

export default function useVariableEditing(group: string) {
  const dispatch = useDispatch();

  return {
    add: createAdd(dispatch, group),
    delete: createDelete(dispatch),
    update: createUpdate(dispatch),
  };
}
