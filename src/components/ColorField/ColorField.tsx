import React, { useState, useRef } from "react";
import classes from "./ColorField.module.css";
import clsx from "clsx";
import { FieldWrapper } from "@components/FieldWrapper";
import { ChromePicker } from "react-color";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";
import { ColorPreview } from "@components/ColorPreview";
import { DropDown } from "@components/DropDown";
import { VariableSearch } from "@app/Editor/components/VariableSearch";

export interface IColorFieldProps extends PropsClass {
  defaultValue?: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const ColorField = function (props: IColorFieldProps) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);

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
            value={props.value}
          />
          <span className={classes.ColorPreview}>
            <ColorPreview color={props.value} className={classes.ColorSwatch} />
          </span>
        </button>
      </FieldWrapper>
      <DropDown open={open} ref={ref}>
        <div className={classes.PickerContainer}>
          <ChromePicker
            color={props.value}
            onChange={(value) =>
              Option(props.onChange).mapOrElse(
                () => void 0,
                (fn) => fn(value.hex)
              )
            }
          />
          <VariableSearch />
        </div>
      </DropDown>
    </div>
  );
};
