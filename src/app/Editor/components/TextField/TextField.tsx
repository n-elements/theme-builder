import React, { useState } from "react";
import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { FieldWrapper } from "@components/FieldWrapper";
import clsx from "clsx";
import { Option } from "tiinvo";
import { IFieldProps } from "../../types/fields";
import classes from "./TextField.module.css";

export interface IUnitFieldProps extends IFieldProps {
  readOnly?: boolean;
}

export const TextField = function (props: IUnitFieldProps) {
  const values = useVariableValues(props.variable);
  const [, setTextValue] = useState(values.value);

  return (
    <div className={clsx(classes.UnitField, props.className)}>
      <FieldWrapper>
        <div className={classes.Field}>
          <input
            className={classes.Input}
            onChange={(event) => {
              Option(props.onChange).mapOrElse(
                () => void 0,
                (fn) => {
                  const newValue = event.target.value;
                  fn(newValue);
                  setTextValue(newValue);
                }
              );
              Option(props.onBreakReference).mapOrElse(
                () => void 0,
                (fn) => fn()
              );
            }}
            readOnly={props.readOnly}
            type="text"
            tabIndex={-1}
            value={values.displayValue}
          />
        </div>
      </FieldWrapper>
    </div>
  );
};
