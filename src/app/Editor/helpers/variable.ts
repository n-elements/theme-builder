import { IVariable, VariableValue } from "@store/theming/types";
import { Option } from "tiinvo";
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

export function normalizeVariableName(name: string) {
  return formatVariableName(cleanVariableName(name));
}

// export function getCSSCustomProp(propKey: string, element = document.documentElement, castAs: string = 'string') {
// 	let response = getComputedStyle(element).getPropertyValue(propKey);

// 	// Tidy up the string if there's something to work with
// 	if (response.length) {
// 		response = response.replace(/\'|"/g, '').trim();
// 	}

// 	// Convert the response into a whatever type we wanted
// 	switch (castAs) {
// 		case 'number':
// 		case 'int':
// 			return parseInt(response, 10);
// 		case 'float':
// 			return parseFloat(response, 10);
// 		case 'boolean':
// 		case 'bool':
// 			return response === 'true' || response === '1';
// 	}

// 	// Return the string response by default
// 	return response;
// }
