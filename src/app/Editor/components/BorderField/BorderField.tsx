import React from "react";
import { isKeyword } from "@app/Editor/helpers/keywords";
import useVariableValues from "@app/Editor/hooks/useVariableValues";
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
  const values = useVariableValues(props.variable);
  const showColorPicker =
    !isKeyword(values.displayValue) && !props.variable._referenceId;

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
              onChange={border.createOnChange(variables.size)}
              variable={variables.size}
              hideSetting
            />
          </fieldset>
          <fieldset>
            <label>style</label>
            <TextField
              onChange={border.createOnChange(variables.style)}
              variable={variables.style}
              hideSetting
            />
          </fieldset>
        </div>
      </TextField>
      {showColorPicker && (
        <ColorField
          data-iskeyword={false}
          onBreakReference={border.createOnBreakrelation(variables.color)}
          onChange={border.createOnChange(variables.color)}
          onChangeRelation={border.createOnChangeRelation(variables.color)}
          variable={variables.color}
        />
      )}
    </div>
  );
};
