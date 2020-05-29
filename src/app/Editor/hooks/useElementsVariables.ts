import useVariables from "./useVariables";
import routes from "@routes";
import { generatePath } from "react-router-dom";

export default function useElementsVariables() {
  const variables = useVariables(routes.editor.elements);
  const elements = Array.from(new Set(variables.map((a) => a.element)));

  return {
    elements,
    getRouteForElement(element: string) {
      return generatePath(routes.editor.elements, { element });
    },
    getVariablesForElement(element: string) {
      return variables.filter((v) => v.element === element);
    },
  };
}
