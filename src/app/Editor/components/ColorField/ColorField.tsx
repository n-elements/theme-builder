import { ColorPreview } from "@app/Editor/components/ColorPreview";
import { VariableSearch } from "@app/Editor/components/VariableSearch";
import { formatVariableName } from "@app/Editor/helpers/variable";
import useRelatedVariables from "@app/Editor/hooks/useRelatedVariables";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import routes from "@routes";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { ChromePicker } from "react-color";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";
import classes from "./ColorField.module.css";

export interface IColorFieldProps extends PropsClass {
  defaultValue?: string;
  name: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const ColorField = function (props: IColorFieldProps) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);
  const colourRelatedVariables = useRelatedVariables(
    routes.editor.colours,
    props.name
  );

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
          <VariableSearch hidden={colourRelatedVariables.length === 0}>
            {colourRelatedVariables.map((variable, index) => (
              <option key={index} value={variable.name}>
                {formatVariableName(variable.name)}
              </option>
            ))}
          </VariableSearch>
        </div>
      </DropDown>
    </div>
  );
};
