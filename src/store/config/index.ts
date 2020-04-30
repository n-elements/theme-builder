import { ColorResult } from "react-color";
import { createReducer } from "redux-aar";
import * as actions from "./actions";

export type Theme = "auto" | "light" | "dark";

interface IConfig {
  preferredColorFormat: keyof ColorResult;
  theme: Theme;
}

function initialState(): IConfig {
  return {
    preferredColorFormat: "hex",
    theme: "auto",
  };
}

const reducer = createReducer(initialState());

reducer.on(actions.updatesetting, (state, setting) => ({
  ...state,
  [setting.name]: setting.value,
}));

export default reducer.reduce();
