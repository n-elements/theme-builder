import {
  VariableId,
  IVariable,
  VariableArray,
  IVariableRelation,
} from "./types";
import { Maybe, Option, None, Some } from "tiinvo";

export function assignId(variable: IVariable): IVariable {
  return {
    ...variable,
    _id: generateId(),
  };
}

export function breakRelation(
  variables: VariableArray,
  variable: IVariable
): VariableArray {
  const copied = variables.slice();

  copied[
    copied.findIndex((v) => variable._id === v._id)
  ]._referenceId = undefined;

  return copied;
}

export function cleanVariableName(name: string) {
  return name
    .replace("--", "")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9_-]/g, "");
}

export function extractVariableName(value: string): Option<string> {
  const token = "var(";

  return Maybe(value.includes(token)).cata({
    Nothing: None,
    Just: () =>
      Option(value.split(",")[0]).andThen((chunk) =>
        Some(chunk.replace(token, ""))
      ),
  });
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

export function getReferencedVariable(
  list: VariableArray,
  variable: IVariable
): Option<IVariable> {
  return Option(list.find((v) => v._id === variable._referenceId)!);
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
      copied[copied.indexOf(owner)]._referenceId = maybeExternal.unwrap()!._id;
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
