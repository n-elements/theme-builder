import { prefix } from "redux-aar";

const createAction = prefix("theming");

export const addvariable = createAction("addvariable");
