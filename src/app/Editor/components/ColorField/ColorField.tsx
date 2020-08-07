import { isKeyword, transcodeKeyword } from "@app/Editor/helpers/keywords";
import useFieldEditing from "@app/Editor/hooks/useFieldEditing";
import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import clsx from "clsx";
import Color from "color";
import React from "react";
import { ChromePicker } from "react-color";
import { defineMessages, useIntl } from "react-intl";
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

export const ColorField = function ({
  variable,
  onChange,
  onChangeRelation,
  onBreakReference,
  className,
  ...attributes
}: IColorFieldProps) {
  const field = useFieldEditing();
  const intl = useIntl();
  const values = useVariableValues(variable);
  const defaultColor = "hsl(0, 0%, 0%)";
  const fallbackValueForNonColours = isKeyword(values.value)
    ? defaultColor
    : values.value;

  const handleChange = (value: any) => {
    Option(onChange).mapOrElse(
      () => void 0,
      (fn) => fn(value)
    );

    Option(variable._referenceId)
      .and(Option(onBreakReference))
      .mapOrElse(
        () => void 0,
        (fn) => fn()
      );
  };

  return (
    <div
      className={clsx(classes.ColorField, className)}
      {...attributes}
      ref={field.ref}
    >
      <FieldWrapper>
        <button
          className={classes.Field}
          onClick={field.createOpenHandler(true)}
        >
          <span className={classes.Value}>
            {isKeyword(values.displayValue)
              ? transcodeKeyword(values.displayValue)
              : values.displayValue || defaultColor}
          </span>
          {!isKeyword(values.value) ? (
            <span className={classes.ColorPreview}>
              <ColorPreview
                color={fallbackValueForNonColours}
                className={classes.ColorSwatch}
              />
            </span>
          ) : null}
        </button>
      </FieldWrapper>
      {values.displayValue !== values.value ? (
        <span className={classes.RelatedValue}>
          <small>{values.value}</small>
        </span>
      ) : null}
      <DropDown open={field.open} floating>
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
          onChangeRelation={onChangeRelation}
          variable={variable}
        />
      </DropDown>
    </div>
  );
};
