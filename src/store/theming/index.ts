import { createReducer } from "redux-aar";
import { VariableArray, IVariable } from "./types";
import * as actions from "./actions";
import {
  assignId,
  createUpdateVariableMap,
  makeRelation,
  breakRelation,
} from "./helpers";
import preset, { accentvariable } from "./variables-preset";
import { Option } from "tiinvo";

interface ITheming {
  name: string;
  variablespreset: VariableArray;
  variables: VariableArray;
  variablesCounter: number;
}

function initialState(): ITheming {
  return {
    name: "theme-name",
    variablespreset: preset(),
    variables: preset(),
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

reducer.on(actions.reset, (state) => {
  const initial = initialState();
  const findAccent = (othervariable: IVariable): boolean =>
    othervariable.name === accentvariable.name;
  const maybeAccentIndex = Option(initial.variables.findIndex(findAccent));
  const maybeFoundAccent = Option(state.variables.find(findAccent));

  maybeAccentIndex.and(maybeFoundAccent).mapOrElse(
    () => void 0,
    (accent) => {
      initial.variables[maybeAccentIndex.unwrap()] = accent;
    }
  );

  return initial;
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
