import { getVariableByName } from "@store/theming/helpers";
import { IVariable, VariableType } from "@store/theming/types";
import useVariables from "./useVariables";

function createFilterById(id?: string) {
  return (variable: IVariable) => variable._referenceId !== id;
}

function createFilterByName(name: string) {
  return (variable: IVariable) => variable.name !== name;
}

function createFilterByType(type: VariableType) {
  return (variable: IVariable) => variable.type === type;
}

export default function useRelatedVariables(variable: IVariable) {
  const { name, type } = variable;
  const variables = useVariables("*");
  const maybeVariable = getVariableByName(variables, name);

  return maybeVariable.mapOrElse(
    () =>
      variables
        .filter(createFilterByName(name))
        .filter(createFilterByType(type)),
    (variable) =>
      variables
        .filter(createFilterByName(name))
        .filter(createFilterById(variable._id))
        .filter(createFilterByType(type))
  );
}
