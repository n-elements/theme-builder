import React from "react";
import { IFieldProps } from "@app/Editor/types/fields";
import { TextField } from "../TextField";
import { ColorField } from "../ColorField";
import clsx from "clsx";
import classes from "./BorderField.module.css";

export interface IBorderFieldProps extends IFieldProps {}

export const BorderField = function (props: IBorderFieldProps) {
  return (
    <div className={clsx(classes.BorderField, props.className)}>
      <TextField
        variable={props.variable}
        onBreakReference={props.onBreakReference}
        onChange={props.onChange}
        onChangeRelation={props.onChangeRelation}
      />
      <ColorField
        variable={props.variable}
        onBreakReference={props.onBreakReference}
        onChange={props.onChange}
        onChangeRelation={props.onChangeRelation}
      />
    </div>
  );
};
