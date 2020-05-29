import nepreset, {
  IVariable as INEVariable,
  VariableDomain as NEVariableDomain,
} from "@native-elements/core/dist/props";
import routes from "@routes";
import { Option } from "tiinvo";
import { assignId, cleanVariableName, extractVariableName } from "./helpers";
import {
  IVariable,
  VariableArray,
  VariableDomain,
  VariableType,
  VariableValue,
} from "./types";

const domains = routes.editor;

function create(
  domain: VariableDomain,
  name: string,
  type: VariableType,
  value: VariableValue
): IVariable {
  return assignId({
    domain,
    name,
    type,
    value,
  });
}

function map(variable: INEVariable): IVariable {
  const mapped = create(
    mapdomain(variable.domain),
    cleanVariableName(variable.name),
    variable.type as VariableType,
    variable.defaultValue
  );

  mapped.element = variable.element;

  return mapped;
}

function mapdomain(domain: NEVariableDomain): VariableDomain {
  switch (domain) {
    case "color":
      return domains.colours;
    case "document":
      return domains.document;
    case "elements":
      return domains.elements;
    case "typography":
      return domains.typography;
  }
}

export const accentvariable = create(
  domains.colours,
  "accent-color",
  "color",
  "hsl(220, 100%, 50%)"
);

export default function preset(): VariableArray {
  const requiresReparentingMap = new Map<
    string,
    { value: string; index: number }
  >();
  const variablesMap = new Map<string, IVariable>();
  const mappedvariables = nepreset.map(map);
  console.log(mappedvariables);
  for (let index = 0; index < mappedvariables.length; index++) {
    const element = mappedvariables[index];
    const maybeExtractedName = extractVariableName(element.value ?? "");

    variablesMap.set(element.name, element);

    if (maybeExtractedName.isSome()) {
      requiresReparentingMap.set(element.name, {
        index,
        value: cleanVariableName(maybeExtractedName.unwrap()!),
      });
    }
  }

  const reparentingElements = Array.from(requiresReparentingMap.keys());

  for (let index = 0; index < reparentingElements.length; index++) {
    const relation = requiresReparentingMap.get(reparentingElements[0])!;
    const variableToReparent = mappedvariables[relation.index];
    const relatedVariable = variablesMap.get(relation.value!)!;

    variableToReparent._referenceId = relatedVariable._id;
    variableToReparent.value = relatedVariable.value;

    if (variableToReparent._id === relatedVariable._id) {
      variableToReparent.value = "";
    }
  }

  return [accentvariable, ...mappedvariables];
}
