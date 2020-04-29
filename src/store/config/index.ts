import { createReducer } from "redux-aar";
import * as actions from "./actions";

export type Theme = "auto" | "light" | "dark";

interface IConfig {
  theme: Theme;
}

function initialState(): IConfig {
  return {
    theme: "auto",
  };
}

const reducer = createReducer(initialState());

reducer.on(actions.updatesetting, (state, setting) => ({
  ...state,
  [setting.name]: setting.value,
}));

export default reducer.reduce();
