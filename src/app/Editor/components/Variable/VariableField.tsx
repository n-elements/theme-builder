import { ColorField } from "@app/Editor/components/ColorField";
import React from "react";
import { IVariable } from "@store/theming/types";
import classes from "./Variable.module.css";

export interface IVariableField {
  variable: IVariable;
  onChange(value?: string): void;
}

export default function VariableField(props: IVariableField) {
  switch (props.variable.type) {
    case "color":
      return (
        <ColorField
          className={classes.VariableInput}
          defaultValue={props.variable.defaultValue}
          onChange={props.onChange}
          name={props.variable.name}
          value={props.variable.value}
          readOnly
        />
      );
    default:
      return null;
  }
}
