import { ColorField } from "@app/Editor/components/ColorField";
import React from "react";
import { IVariable } from "@store/theming/types";
import classes from "./Variable.module.css";
import {
  OnChangeRelationHandler,
  OnChangeHandler,
  OnBreakReferenceHandler,
} from "@app/Editor/types/fields";

export interface IVariableField {
  variable: IVariable;
  onBreakReference: OnBreakReferenceHandler;
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
          onBreakReference={props.onBreakReference}
          onChange={props.onChange}
          onChangeRelation={props.onChangeRelation}
          readOnly
        />
      );
    default:
      return null;
  }
}
