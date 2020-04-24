import { createReducer } from "redux-aar";

function initialState() {
  return {};
}

const reducer = createReducer(initialState());

export default reducer.reduce();
