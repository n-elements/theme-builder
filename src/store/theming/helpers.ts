import {
  VariableId,
  IVariable,
  VariableArray,
  IVariableRelation,
} from "./types";
import { Maybe, Option } from "tiinvo";

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

export function getVariableByName(
  list: VariableArray,
  name?: string
): Option<IVariable> {
  return Option(list.find((variable) => variable.name === name)!);
}

export function getVariableById(
  list: VariableArray,
  id?: VariableId
): Option<IVariable> {
  return Option(list.find((variable) => variable._id === id)!);
}

export function makeRelation(list: VariableArray, relation: IVariableRelation) {
  const copied = list.slice();
  const maybeOwner = getVariableById(copied, relation.id);
  const maybeExternal = getVariableByName(
    copied,
    relation.externalVariableName
  );

  return maybeExternal.and(maybeOwner).mapOrElse(
    () => copied,
    (owner) => {
      copied[copied.indexOf(owner)]._referenceId =
        relation.externalVariableName;
      return copied;
    }
  );
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
