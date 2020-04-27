import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@state";
import actions from "@store/actions";

function selector(state: ApplicationState) {
  return state.config;
}

export default function useConfig() {
  const dispatch = useDispatch();
  const state = useSelector(selector);

  return {
    get(key: keyof typeof state): typeof state[typeof key] {
      return state[key];
    },
    set(name: keyof typeof state, value: typeof state[typeof name]) {
      dispatch(actions.config.updatesetting({ name, value }));
    },
  };
}
