import { createReducer } from "redux-aar";
import { VariableArray } from "./types";
import * as actions from "./actions";
import { assignId, createUpdateVariableMap } from "./helpers";

interface ITheming {
  name: string;
  variables: VariableArray;
}

function initialState(): ITheming {
  return {
    name: "theme-name",
    variables: [],
  };
}

const reducer = createReducer(initialState());

reducer.on(actions.addVariable, (state, variable) => ({
  ...state,
  variables: state.variables.concat(assignId(variable)),
}));

reducer.on(actions.deleteVariable, (state, variable) => ({
  ...state,
  variables: state.variables.filter((v) => v._id !== variable._id),
}));

reducer.on(actions.updateName, (state, name) => ({
  ...state,
  name,
}));

reducer.on(actions.updateVariable, (state, variable) => ({
  ...state,
  variables: state.variables.map(createUpdateVariableMap(variable)),
}));

export default reducer.reduce();
