import { getVariableByName } from "@store/theming/helpers";
import { IVariable, VariableDomain } from "@store/theming/types";
import useVariables from "./useVariables";

function createFilterById(id?: string) {
  return (variable: IVariable) => variable._referenceId !== id;
}

function createFilterByName(name: string) {
  return (variable: IVariable) => variable.name !== name;
}

export default function useRelatedVariables(
  domain: VariableDomain,
  name: string
) {
  const variables = useVariables(domain);
  const maybeVariable = getVariableByName(variables, name);

  return maybeVariable.mapOrElse(
    () => variables.filter(createFilterByName(name)),
    (variable) =>
      variables
        .filter(createFilterByName(name))
        .filter(createFilterById(variable._id))
  );
}
