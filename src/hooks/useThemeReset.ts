import actions from "@store/actions";
import { useDispatch } from "react-redux";

export default function useThemeReset() {
  const dispatch = useDispatch();

  return () => {
    dispatch(actions.config.reset());
    dispatch(actions.theming.reset());
  };
}
