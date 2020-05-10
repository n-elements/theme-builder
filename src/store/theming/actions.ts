import { prefix } from "redux-aar";
import { IVariable, IVariableRelation } from "./types";

const createAction = prefix("theming");

export const addReferenceToVariable = createAction<IVariableRelation>(
  "addReferenceToVariable"
);
export const addVariable = createAction<IVariable>("addvariable");
export const deleteVariable = createAction<IVariable>("deleteVariable");
export const deleteReference = createAction<IVariable>("deleteVariable");
export const reset = createAction("reset");
export const updateName = createAction<string>("updateName");
export const updateVariable = createAction<IVariable>("updatevariable");
