import { ComponentType, createElement, CSSProperties } from "react";
import useVariables from "../hooks/useVariables";
import { IVariable, VariableArray } from "@store/theming/types";
import { Option } from "tiinvo";
import { formatVariableName } from "../helpers/variable";

type CssVar = { [index: string]: string };
type EnhancedCSSProperties = CSSProperties & CssVar;

function convertVariables(variables: VariableArray): CssVar {
  return variables.reduce(
    (vars, v) => ({
      ...vars,
      ...convertVariableToCssVariable(v),
    }),
    {}
  );
}

function convertVariableToCssVariable(variable: IVariable): CssVar | undefined {
  return Option(variable.value).mapOrElse(
    () => undefined,
    (value) => ({
      [formatVariableName(variable.name)]: value,
    })
  );
}

export default function withCustomVariables<T>(
  Component: ComponentType<T & { style: EnhancedCSSProperties }>
): ComponentType<T> {
  return (props) => {
    const variables = useVariables("*");
    const style = convertVariables(variables);

    return createElement(Component, {
      ...props,
      style,
    });
  };
}
