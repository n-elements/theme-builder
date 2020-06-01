import { isKeyword, transcodeKeyword } from "@app/Editor/helpers/keywords";
import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import clsx from "clsx";
import Color from "color";
import React, { useRef, useState } from "react";
import { ChromePicker } from "react-color";
import { defineMessages, useIntl } from "react-intl";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";
import { IFieldProps } from "../../types/fields";
import { ColorPreview } from "../ColorPreview";
import Keywords from "../Keywords";
import { VariableSearch } from "../VariableSearch";
import classes from "./ColorField.module.css";

export interface IColorFieldProps extends IFieldProps {
  readOnly?: boolean;
}

const messages = defineMessages({
  keywords: {
    defaultMessage: "Keywords",
    id: "app.Editor.components.UnitField.keywords",
  },
});

export const ColorField = function (props: IColorFieldProps) {
  const intl = useIntl();
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);
  const values = useVariableValues(props.variable);
  const defaultColor = "hsl(0, 0%, 0%)";
  const fallbackValueForNonColours = isKeyword(values.value)
    ? defaultColor
    : values.value;

  useClickAway(ref, createOpenHandler(false));

  const handleChange = (value: any) => {
    Option(props.onChange).mapOrElse(
      () => void 0,
      (fn) => fn(value)
    );
    Option(props.onBreakReference).mapOrElse(
      () => void 0,
      (fn) => fn()
    );
  };

  return (
    <div className={clsx(classes.ColorField, props.className)} ref={ref}>
      <FieldWrapper>
        <button className={classes.Field} onClick={createOpenHandler(true)}>
          <span className={classes.Value}>
            {isKeyword(values.displayValue)
              ? transcodeKeyword(values.displayValue)
              : values.displayValue || defaultColor}
          </span>
          <span className={classes.ColorPreview}>
            <ColorPreview
              color={fallbackValueForNonColours}
              className={classes.ColorSwatch}
            />
          </span>
        </button>
      </FieldWrapper>
      <DropDown open={open} floating>
        <div className={classes.PickerContainer}>
          <ChromePicker
            color={Color(fallbackValueForNonColours).hsl().toString()}
            onChange={(value) => {
              handleChange(
                Color.rgb(
                  value.rgb.r,
                  value.rgb.g,
                  value.rgb.b,
                  value.rgb.a ?? 1
                )
                  .hsl()
                  .round()
                  .string()
              );
            }}
          />
        </div>
        <div className={classes.UnitBlock}>
          <p data-size="ultra-small">
            <b>{intl.formatMessage(messages.keywords)}</b>
          </p>
          <Keywords onSelect={handleChange} value={values.value} />
        </div>
        <VariableSearch
          onChangeRelation={props.onChangeRelation}
          variable={props.variable}
        />
      </DropDown>
    </div>
  );
};
