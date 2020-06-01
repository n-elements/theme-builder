import { useSelector } from "react-redux";
import { ApplicationState } from "@state";

function selector(state: ApplicationState) {
  return state.theming.name;
}

export default function useThemeName() {
  return useSelector(selector);
}
