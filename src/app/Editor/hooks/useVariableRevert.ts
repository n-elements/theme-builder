import { IVariable } from "@store/theming/types";
import { useDispatch } from "react-redux";
import actions from "@store/actions";

export default function useVariableRevert(variable: IVariable) {
  const dispatch = useDispatch();

  return function revert() {
    dispatch(actions.theming.revertVariable(variable));
  };
}
