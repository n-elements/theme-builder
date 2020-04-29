import useConfig from "./useConfig";
import { Theme } from "@store/config";

export default function useThemeModeSwitch() {
  const config = useConfig();
  const type = config.get("theme");

  return {
    change: (type: Theme) => config.set("theme", type),
    type,
  };
}
