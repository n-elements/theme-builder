import routes from "@routes";
import React from "react";
import { generatePath, Route, Switch, Redirect } from "react-router-dom";
import useElementsVariables from "../hooks/useElementsVariables";
import demomap from "./ElementsDemo";

function getpathToElement(element: string) {
  return generatePath(routes.editor.elements, { element });
}

export default function EditorElements() {
  const elements = useElementsVariables().elements;

  return (
    <Switch>
      {elements.map((element, index) => (
        <Route
          component={demomap.get(element!)}
          key={index}
          path={getpathToElement(element!)}
        />
      ))}
      {elements.length > 0 && <Redirect to={getpathToElement(elements[0]!)} />}
    </Switch>
  );
}
