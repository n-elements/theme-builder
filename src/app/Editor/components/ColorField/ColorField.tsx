import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { ChromePicker } from "react-color";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";
import { IFieldProps } from "../../types/fields";
import { ColorPreview } from "../ColorPreview";
import { VariableSearch } from "../VariableSearch";
import Color from "color";
import classes from "./ColorField.module.css";

export interface IColorFieldProps extends IFieldProps {
  readOnly?: boolean;
}

export const ColorField = function (props: IColorFieldProps) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);
  const values = useVariableValues(props.variable);

  useClickAway(ref, createOpenHandler(false));

  return (
    <div className={clsx(classes.ColorField, props.className)}>
      <FieldWrapper>
        <button className={classes.Field} onClick={createOpenHandler(true)}>
          <input
            className={classes.Input}
            onChange={(event) =>
              Option(props.onChange).mapOrElse(
                () => void 0,
                (fn) => fn(event.target.value)
              )
            }
            readOnly={props.readOnly}
            type="text"
            tabIndex={-1}
            value={values.displayValue}
          />
          <span className={classes.ColorPreview}>
            <ColorPreview
              color={values.value}
              className={classes.ColorSwatch}
            />
          </span>
        </button>
      </FieldWrapper>
      <DropDown open={open} ref={ref}>
        <div className={classes.PickerContainer}>
          <ChromePicker
            color={Color(values.value).hex()}
            onChange={(value) => {
              Option(props.onChange).mapOrElse(
                () => void 0,
                (fn) => fn(value.hex)
              );
              Option(props.onBreakReference).mapOrElse(
                () => void 0,
                (fn) => fn()
              );
            }}
          />
        </div>
        <VariableSearch
          onChangeRelation={props.onChangeRelation}
          variable={props.variable}
        />
      </DropDown>
    </div>
  );
};
