import { createReducer } from "redux-aar";

interface ITheming {}

function initialState(): ITheming {
  return {};
}

const reducer = createReducer(initialState());

export default reducer.reduce();
