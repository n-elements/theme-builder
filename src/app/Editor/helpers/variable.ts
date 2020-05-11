import { IVariable, VariableValue } from "@store/theming/types";
import { Option } from "tiinvo";

export function formatVariableName(name: string): string {
  const startingChunk = "--";
  return name.startsWith(startingChunk) ? name : startingChunk + name;
}

export function cleanVariableName(name: string) {
  return name
    .replace("--", "")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9_-]/g, "");
}

export function getDisplayCallCSSVariableName(variable: IVariable): string {
  const formattedName = formatVariableName(variable.name);
  const name = Option(variable.defaultValue).mapOrElse(
    () => formattedName,
    (defaultvalue) => [formattedName, defaultvalue].join(", ")
  );

  return `var(${name})`;
}

export function getDisplayValueOrRelatedVariableName(
  variable: IVariable,
  maybeRelatedVariable: Option<IVariable>
): VariableValue {
  return maybeRelatedVariable.mapOrElse(
    () => variable.value,
    getDisplayCallCSSVariableName
  );
}

export function getValueOrRelatedVariableValue(
  variable: IVariable,
  maybeRelatedVariable: Option<IVariable>
): VariableValue {
  return maybeRelatedVariable.mapOrElse(
    () => variable.value,
    (relatedVariable) => relatedVariable.value
  );
}

export function normalizeVariableName(name: string) {
  return formatVariableName(cleanVariableName(name));
}
