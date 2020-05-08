import { useSelector } from "react-redux";
import { ApplicationState } from "@state";

function selector(state: ApplicationState) {
  return state.theming.variablesCounter;
}

export default function useVariablesCounter() {
  return useSelector(selector);
}
