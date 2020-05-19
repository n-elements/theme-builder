import { ColorField } from "@app/Editor/components/ColorField";
import React from "react";
import { IVariable } from "@store/theming/types";
import {
  OnChangeRelationHandler,
  OnChangeHandler,
  OnBreakReferenceHandler,
} from "@app/Editor/types/fields";
import { UnitField } from "../UnitField";

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
          variable={props.variable}
          onBreakReference={props.onBreakReference}
          onChange={props.onChange}
          onChangeRelation={props.onChangeRelation}
          readOnly
        />
      );
    case "unit":
      return (
        <UnitField
          variable={props.variable}
          onBreakReference={props.onBreakReference}
          onChange={props.onChange}
          onChangeRelation={props.onChangeRelation}
        />
      );
    case "unit-multiple":
      return (
        <UnitField
          variable={props.variable}
          onBreakReference={props.onBreakReference}
          onChange={props.onChange}
          onChangeRelation={props.onChangeRelation}
        />
      );
    default:
      return null;
  }
}
