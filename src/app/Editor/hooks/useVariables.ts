import { useSelector } from "react-redux";
import { ApplicationState } from "@state";
import { VariableGroup, IVariable } from "@store/theming/types";

function createfilter(group: VariableGroup) {
  return (variable: IVariable) => variable.group === group;
}

function selector(state: ApplicationState) {
  return state.theming.variables;
}

export default function useVariables(group: VariableGroup) {
  const list = useSelector(selector);
  return list.filter(createfilter(group));
}
