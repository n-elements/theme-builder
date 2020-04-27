import { VariableId, IVariable } from "./types";
import { Maybe } from "tiinvo";

export function assignId(variable: IVariable): IVariable {
  return {
    ...variable,
    _id: generateId(),
  };
}

export function createUpdateVariableMap(newvar: IVariable) {
  return (oldvar: IVariable) => maybeUpdateVariable(oldvar, newvar);
}

export function generateId(): VariableId {
  return (Date.now() * Math.floor(Math.random() * 1000000)).toString(32);
}

export function maybeUpdateVariable(
  oldvar: IVariable,
  newvar: IVariable
): IVariable {
  return Maybe(oldvar._id === newvar._id).cata({
    Just: () => updateVariable(oldvar, newvar),
    Nothing: () => oldvar,
  });
}

export function updateVariable(
  oldvar: IVariable,
  newvar: IVariable
): IVariable {
  return {
    ...oldvar,
    ...newvar,
  };
}
