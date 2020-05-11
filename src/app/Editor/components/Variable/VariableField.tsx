import { ColorField } from "@app/Editor/components/ColorField";
import React from "react";
import { IVariable } from "@store/theming/types";
import classes from "./Variable.module.css";
import {
  OnChangeRelationHandler,
  OnChangeHandler,
} from "@app/Editor/types/fields";

export interface IVariableField {
  variable: IVariable;
  onChange: OnChangeHandler;
  onChangeRelation: OnChangeRelationHandler;
}

export default function VariableField(props: IVariableField) {
  switch (props.variable.type) {
    case "color":
      return (
        <ColorField
          className={classes.VariableInput}
          variable={props.variable}
          onChange={props.onChange}
          onChangeRelation={props.onChangeRelation}
          readOnly
        />
      );
    default:
      return null;
  }
}
