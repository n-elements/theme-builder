import { getReferencedVariable } from "@store/theming/helpers";
import { IVariable, VariableArray } from "@store/theming/types";
import { Option } from "tiinvo";
import {
  formatVariableName,
  getValueOrRelatedVariableValue,
} from "../helpers/variable";
import useVariables from "./useVariables";

type CssVar = { [index: string]: string };

function convertVariables(variables: VariableArray): CssVar {
  return variables.reduce(
    (vars, v) => ({
      ...vars,
      ...convertVariableToCssVariable(v, variables),
    }),
    {}
  );
}

function convertVariableToCssVariable(
  variable: IVariable,
  variables: VariableArray
): CssVar | undefined {
  const maybeReferencedVariable = getReferencedVariable(variables, variable);
  const maybeValue = getValueOrRelatedVariableValue(
    variable,
    maybeReferencedVariable
  );

  return Option(maybeValue).mapOrElse(
    () => undefined,
    (value) => ({
      [formatVariableName(variable.name)]: value,
    })
  );
}

export default function useCSSVariables() {
  const variables = useVariables("*");
  return convertVariables(variables);
}
