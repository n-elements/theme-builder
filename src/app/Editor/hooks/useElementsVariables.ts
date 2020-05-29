import useVariables from "./useVariables";
import routes from "@routes";

export default function useElementsVariables() {
  const variables = useVariables(routes.editor.elements);
  console.log(variables);
  const elements = Array.from(new Set(variables.map((a) => a.element)));
  console.log(elements);
  return {
    elements,
  };
}
