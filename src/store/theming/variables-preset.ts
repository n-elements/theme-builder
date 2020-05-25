import {
  VariableArray,
  IVariable,
  VariableType,
  VariableDomain,
  VariableValue,
} from "./types";
import routes from "@routes";
import { assignId } from "./helpers";
import nepreset, {
  IVariable as INEVariable,
} from "@native-elements/core/dist/props";
import { Option } from "tiinvo";

const domains = routes.editor;

function bindRelationTo(variable: IVariable, external: IVariable): IVariable {
  return {
    ...variable,
    _referenceId: external._id,
  };
}

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
    variable.domain,
    variable.name,
    <VariableType>variable.type,
    variable.defaultValue
  );

  Option(variable.element).mapOrElse(
    () => void 0,
    (element) => (mapped.domain += "#" + element)
  );

  return mapped;
}

export const accentvariable = create(
  domains.colours,
  "accent-color",
  "color",
  "hsl(220, 100%, 50%)"
);

export default function preset(): VariableArray {
  return [accentvariable, ...nepreset.map(map)];
}
