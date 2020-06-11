import { createReducer } from "redux-aar";
import { Option, Maybe } from "tiinvo";
import * as actions from "./actions";
import {
  assignId,
  breakRelation,
  createUpdateVariableMap,
  makeRelation,
  revertvariable,
  createFindInPreset,
  cloneVariable,
} from "./helpers";
import { VariableArray } from "./types";
import preset from "./variables-preset";

interface ITheming {
  name: string;
  variablespreset: VariableArray;
  variables: VariableArray;
  variablesCounter: number;
}

function initialState(): ITheming {
  const variablespreset = preset();

  return {
    name: "theme-name",
    variablespreset,
    variables: variablespreset.slice(),
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

reducer.on(actions.cloneVariable, (state, variableToClone) => {
  const variableIndex = state.variables.findIndex(
    (v) => v._id === variableToClone._id
  );
  const copies = state.variables.filter(
    (v) => v._clonedfrom === variableToClone._id
  );
  const clone = cloneVariable(variableToClone, copies.length + 1);
  const variables = state.variables.slice();
  const index = Maybe(copies.length)
    .option()
    .mapOrElse(
      () => variableIndex + 1,
      (count) => variableIndex + count + 1
    );

  variables.splice(index, 0, clone);

  return {
    ...state,
    variables,
  };
});

reducer.on(actions.deleteReference, (state, variable) => ({
  ...state,
  variables: breakRelation(state.variables, variable),
}));

reducer.on(actions.deleteVariable, (state, variable) => ({
  ...state,
  variables: state.variables.filter((v) => v._id !== variable._id),
}));

reducer.on(actions.reset, (state) => {
  const initial = initialState();
  const find = createFindInPreset(state.variablespreset);

  return {
    ...initial,
    variablespreset: state.variablespreset,
    variables: state.variables
      .filter(find)
      .map((a) => revertvariable(a, find(a))),
  };
});

reducer.on(actions.revertVariable, (state, variable) => {
  const variables = state.variables.slice();
  const maybeDefaultIndexOf = state.variablespreset.findIndex(
    (a) => a._id === variable._id
  );
  const maybeIndexOf = state.variables.findIndex((a) => a._id === variable._id);

  Option(maybeIndexOf).mapOrElse(
    () => void 0,
    (index) =>
      Option(maybeDefaultIndexOf).mapOrElse(
        () => void 0,
        (defaultIndex) => {
          variables[index] = { ...state.variablespreset[defaultIndex] };
        }
      )
  );

  return {
    ...state,
    variables,
  };
});

reducer.on(actions.updateName, (state, name) => ({
  ...state,
  name,
}));

reducer.on(actions.updateVariable, (state, variable) => ({
  ...state,
  variables: state.variables.map(createUpdateVariableMap(variable)),
}));

export default reducer.reduce();
