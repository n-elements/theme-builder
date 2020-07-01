import React, { Suspense, lazy } from "react";
import { IVariable } from "@store/theming/types";
import {
  OnChangeRelationHandler,
  OnChangeHandler,
  OnBreakReferenceHandler,
} from "@app/Editor/types/fields";
import { SkeletonLoader } from "@components/SkeletonLoader";
import { BorderField } from "../BorderField";

const ColorField = lazy(() =>
  import("@app/Editor/components/ColorField").then(({ ColorField }) => ({
    default: ColorField,
  }))
);
const UnitField = lazy(() =>
  import("@app/Editor/components/UnitField").then(({ UnitField }) => ({
    default: UnitField,
  }))
);
const TextField = lazy(() =>
  import("@app/Editor/components/TextField").then(({ TextField }) => ({
    default: TextField,
  }))
);

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
        <Suspense fallback={<SkeletonLoader height={40} />}>
          <ColorField
            variable={props.variable}
            onBreakReference={props.onBreakReference}
            onChange={props.onChange}
            onChangeRelation={props.onChangeRelation}
            readOnly
          />
        </Suspense>
      );
    case "unit":
    case "unit-multiple":
      return (
        <Suspense fallback={<SkeletonLoader height={40} />}>
          <UnitField
            variable={props.variable}
            onBreakReference={props.onBreakReference}
            onChange={props.onChange}
            onChangeRelation={props.onChangeRelation}
          />
        </Suspense>
      );
    case "text":
    case "box-shadow":
      return (
        <Suspense fallback={<SkeletonLoader height={40} />}>
          <TextField
            variable={props.variable}
            onBreakReference={props.onBreakReference}
            onChange={props.onChange}
            onChangeRelation={props.onChangeRelation}
          />
        </Suspense>
      );
    case "border":
      return (
        <Suspense fallback={<SkeletonLoader height={40} />}>
          <BorderField
            variable={props.variable}
            onBreakReference={props.onBreakReference}
            onChange={props.onChange}
            onChangeRelation={props.onChangeRelation}
          />
        </Suspense>
      );
    default:
      return null;
  }
}
