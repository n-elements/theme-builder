import React from "react";
import { IFieldProps } from "@app/Editor/types/fields";
import { TextField } from "../TextField";
import { ColorField } from "../ColorField";
import clsx from "clsx";
import classes from "./BorderField.module.css";
import useCSSBorder from "@app/Editor/hooks/useCSSBorder";
import { UnitField } from "../UnitField";

export interface IBorderFieldProps extends IFieldProps {}

export const BorderField = function (props: IBorderFieldProps) {
  const border = useCSSBorder(props.variable);
  const variables = border.generatepseudovariables();

  return (
    <div className={clsx(classes.BorderField, props.className)}>
      <TextField
        variable={props.variable}
        onBreakReference={props.onBreakReference}
        onChange={props.onChange}
        onChangeRelation={props.onChangeRelation}
      >
        <div className={classes.Details}>
          <fieldset>
            <label>size</label>
            <UnitField
              onBreakReference={border.createOnBreakrelation(variables.size)}
              onChange={border.createOnChange(variables.size)}
              onChangeRelation={border.createOnChangeRelation(variables.size)}
              variable={variables.size}
              hideSetting
            />
          </fieldset>
          <fieldset>
            <label>style</label>
            <TextField
              onBreakReference={border.createOnBreakrelation(variables.style)}
              onChange={border.createOnChange(variables.style)}
              onChangeRelation={border.createOnChangeRelation(variables.style)}
              variable={variables.style}
              hideSetting
            />
          </fieldset>
        </div>
      </TextField>
      <label>color</label>
      <ColorField
        data-iskeyword={false}
        onBreakReference={border.createOnBreakrelation(variables.color)}
        onChange={border.createOnChange(variables.color)}
        onChangeRelation={border.createOnChangeRelation(variables.color)}
        variable={variables.color}
      />
    </div>
  );
};
