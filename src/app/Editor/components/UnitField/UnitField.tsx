import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";
import { IFieldProps } from "../../types/fields";
import { VariableSearch } from "../VariableSearch";
import classes from "./UnitField.module.css";

export interface IUnitFieldProps extends IFieldProps {
  readOnly?: boolean;
}

export const UnitField = function (props: IUnitFieldProps) {
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
          <span className={classes.ColorPreview}>A</span>
        </button>
      </FieldWrapper>
      <DropDown open={open} ref={ref}>
        <VariableSearch
          onChangeRelation={props.onChangeRelation}
          variable={props.variable}
        />
      </DropDown>
    </div>
  );
};
