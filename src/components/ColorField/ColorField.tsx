import React, { useState, useRef } from "react";
import classes from "./ColorField.module.css";
import clsx from "clsx";
import { FieldWrapper } from "@components/FieldWrapper";
import { ChromePicker } from "react-color";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";

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
        <input
          onChange={(event) =>
            Option(props.onChange).mapOrElse(
              () => void 0,
              (fn) => fn(event.target.value)
            )
          }
          readOnly={props.readOnly}
          type="text"
          value={props.value}
        />
        <span
          className={classes.ColorPreview}
          onClick={createOpenHandler(true)}
          style={{ backgroundColor: props.value }}
        />
      </FieldWrapper>
      {open && (
        <div className={classes.ColorPickerDialog} ref={ref}>
          <ChromePicker
            color={props.value}
            onChange={(value) =>
              Option(props.onChange).mapOrElse(
                () => void 0,
                (fn) => fn(value.hex)
              )
            }
          />
        </div>
      )}
    </div>
  );
};
