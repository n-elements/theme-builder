import { createReducer } from "redux-aar";
import { VariableArray } from "./types";
import * as actions from "./actions";
import {
  assignId,
  createUpdateVariableMap,
  makeRelation,
  breakRelation,
} from "./helpers";

interface ITheming {
  name: string;
  variables: VariableArray;
  variablesCounter: number;
}

function initialState(): ITheming {
  return {
    name: "theme-name",
    variables: [],
    variablesCounter: 0,
  };
}

const reducer = createReducer(initialState());

reducer.on(actions.addVariable, (state, variable) => ({
  ...state,
  variables: state.variables.concat(assignId(variable)),
  variablesCounter: state.variablesCounter + 1,
}));

reducer.on(actions.addReferenceToVariable, (state, relation) => ({
  ...state,
  variables: makeRelation(state.variables, relation),
}));

reducer.on(actions.deleteReference, (state, variable) => ({
  ...state,
  variables: breakRelation(state.variables, variable),
}));

reducer.on(actions.deleteVariable, (state, variable) => ({
  ...state,
  variables: state.variables.filter((v) => v._id !== variable._id),
}));

reducer.on(actions.reset, initialState);

reducer.on(actions.updateName, (state, name) => ({
  ...state,
  name,
}));

reducer.on(actions.updateVariable, (state, variable) => ({
  ...state,
  variables: state.variables.map(createUpdateVariableMap(variable)),
}));

export default reducer.reduce();
