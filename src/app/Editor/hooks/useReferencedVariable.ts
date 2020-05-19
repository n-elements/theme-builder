import { IVariable } from "@store/theming/types";
import { getReferencedVariable } from "@store/theming/helpers";
import useVariables from "./useVariables";

export default function useReferencedVariable(variable: IVariable) {
  const variables = useVariables("*");
  return getReferencedVariable(variables, variable);
}
