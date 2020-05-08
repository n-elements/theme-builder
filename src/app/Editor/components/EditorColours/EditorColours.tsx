import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";
import { useLocation } from "react-router-dom";
import useVariables from "../../hooks/useVariables";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { ColorSwatch } from "../ColorSwatch";
import classes from "./EditorColours.module.css";

export default function EditorColours() {
  const location = useLocation();
  const variables = useVariables(location.pathname);

  return (
    <Switch>
      <Route path={routes.editor.colours}>
        <EditorWrapper>
          <EditorHeader
            title="Colors"
            subtitle="List of all the available colors"
          />
          <div className={classes.ColorsList}>
            {variables.map((variable, index) => (
              <ColorSwatch
                key={index}
                propName={variable.name}
                value={variable.value}
              />
            ))}
            {/* <ColorSwatch propName="--ne-accent-color" value="#00E5BF" />
            <ColorSwatch propName="--ne-custom-color-one" value="#974CFF" /> */}
          </div>
        </EditorWrapper>
      </Route>
    </Switch>
  );
}
