import { useSelector } from "react-redux";
import { ApplicationState } from "@state";
import { VariableDomain, IVariable } from "@store/theming/types";

function createfilter(group: VariableDomain) {
  return (variable: IVariable) => variable.domain === group;
}

function selector(state: ApplicationState) {
  return state.theming.variables;
}

export default function useVariables(domain: VariableDomain) {
  const list = useSelector(selector);
  return list.filter(createfilter(domain));
}
