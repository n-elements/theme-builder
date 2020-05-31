import useVariables from "./useVariables";
import { CSSProperties } from "react";
import { VariableArray, IVariable } from "@store/theming/types";
import { getReferencedVariable } from "@store/theming/helpers";
import {
  getValueOrRelatedVariableValue,
  formatVariableName,
} from "../helpers/variable";
import { Option } from "tiinvo";

type CssVar = { [index: string]: string };
type EnhancedCSSProperties = CSSProperties & CssVar;

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
