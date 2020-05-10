import { VariableDomain } from "@store/theming/types";
import useVariables from "./useVariables";

export default function useRelatedVariables(
  domain: VariableDomain,
  name: string
) {
  return useVariables(domain).filter((variable) => variable.name !== name);
}
