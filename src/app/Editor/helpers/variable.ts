import { IVariable, VariableArray, VariableValue } from "@store/theming/types";
import { None, Option } from "tiinvo";
import { cleanVariableName } from "@store/theming/helpers";

export function formatVariableName(name: string): string {
  const startingChunk = "--";
  return name.startsWith(startingChunk) ? name : startingChunk + name;
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

export function isValueAVariableName(value: unknown): boolean {
  return typeof value === "string" && value.startsWith("var(");
}

export function normalizeVariableName(name: string) {
  return formatVariableName(cleanVariableName(name));
}

export function maybeGetRelatedVariables(
  variables: VariableArray,
  ...values: string[]
): Option<IVariable>[] {
  const results: Option<IVariable>[] = [];

  for (let i = 0; i < values.length; i++) {
    const element = values[i];

    if (isValueAVariableName(element)) {
      const cleaned = element.replace("var(--", "").replace(")", "");
      const found = variables.find((v) => v.name === cleaned)!;

      results.push(Option(found));
    } else {
      results.push(None());
    }
  }

  return results;
}
