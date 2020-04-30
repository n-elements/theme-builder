import { VariableDomain, IVariable } from "@store/theming/types";
import { Option } from "tiinvo";
import useVariables from "./useVariables";

export default function useVariable(
  domain: VariableDomain,
  name: string
): Option<IVariable> {
  const variables = useVariables(domain);
  return Option(variables.find((v) => v.name === name)!);
}
