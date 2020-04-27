import useConfig from "./useConfig";

export default function useThemeModeSwitch() {
  const config = useConfig();
  const type = config.get("theme");

  return {
    change: () => config.set("theme", type === "dark" ? "light" : "dark"),
    type,
  };
}
