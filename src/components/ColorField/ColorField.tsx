import React, { useState, useRef } from "react";
import classes from "./ColorField.module.css";
import clsx from "clsx";
import { FieldWrapper } from "@components/FieldWrapper";
import { ChromePicker } from "react-color";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";
import { ColorPreview } from "@components/ColorPreview";
import { DropDown } from "@components/DropDown";

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
        <button
          className={classes.ColorPreview}
          onClick={createOpenHandler(true)}
        >
          <ColorPreview color={props.value} className={classes.ColorSwatch} />
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
        </div>
      </DropDown>
    </div>
  );
};
