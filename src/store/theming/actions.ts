import { prefix } from "redux-aar";
import { IVariable } from "./types";

const createAction = prefix("theming");

export const addVariable = createAction<IVariable>("addvariable");
export const updateName = createAction<string>("updateName");
export const updateVariable = createAction<IVariable>("updatevariable");
export const deleteVariable = createAction<IVariable>("deleteVariable");
