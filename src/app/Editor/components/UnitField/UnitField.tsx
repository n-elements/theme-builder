import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { Button } from "@components/Button";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Option, Maybe } from "tiinvo";
import { defineMessages, useIntl } from "react-intl";
import { guessUnitType, UnitType, changeUnit } from "../../helpers/unit";
import { IFieldProps } from "../../types/fields";
import { VariableSearch } from "../VariableSearch";
import classes from "./UnitField.module.css";
import { UnitPicker, UnitPickerButton } from "../UnitPicker";

const messages = defineMessages({
  keywords: {
    defaultMessage: "Keywords",
    id: "app.Editor.components.UnitField.keywords",
  },
  commonUnits: {
    defaultMessage: "Common units",
    id: "app.Editor.components.UnitField.commonUnits",
  },
});

export interface IUnitFieldProps extends IFieldProps {
  readOnly?: boolean;
}

function getAriaChecked(
  currentValue: UnitType,
  expectedType: UnitType
): "true" | "false" {
  return currentValue === expectedType ? "true" : "false";
}

export const UnitField = function (props: IUnitFieldProps) {
  const intl = useIntl();
  const ref = useRef(null);
  const values = useVariableValues(props.variable);
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState(guessUnitType(values.value));
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);

  useClickAway(ref, createOpenHandler(false));

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
                  setUnit(guessUnitType(newValue));
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
          <Button
            secondary
            small
            onClick={createOpenHandler(true)}
            className={classes.UnitPreview}
          >
            {unit}
          </Button>
        </div>
      </FieldWrapper>
      <DropDown open={open} ref={ref}>
        <div className={classes.UnitBlock}>
          <p data-size="ultra-small">
            <b>{intl.formatMessage(messages.keywords)}</b>
          </p>
          <div
            className={classes.UnitsContainer}
            role="radiogroup"
            aria-label="Set the value unit"
          >
            <UnitPicker>
              <UnitPickerButton
                variable={props.variable}
                unitType={UnitType.REV}
                onChange={props.onChange}
              />
              <UnitPickerButton
                variable={props.variable}
                unitType={UnitType.UNS}
                onChange={props.onChange}
              />
              <UnitPickerButton
                variable={props.variable}
                unitType={UnitType.INIT}
                onChange={props.onChange}
              />
              <UnitPickerButton
                variable={props.variable}
                unitType={UnitType.INH}
                onChange={props.onChange}
              />
              <UnitPickerButton
                variable={props.variable}
                unitType={UnitType.NONE}
                onChange={props.onChange}
              />
            </UnitPicker>
          </div>
        </div>
        <div className={classes.UnitBlock}>
          <p data-size="ultra-small">
            <b>{intl.formatMessage(messages.commonUnits)}</b>
          </p>

          <UnitPicker>
            <UnitPickerButton
              variable={props.variable}
              unitType={UnitType.PX}
              onChange={props.onChange}
            />
            <UnitPickerButton
              variable={props.variable}
              unitType={UnitType.EM}
              onChange={props.onChange}
            />
            <UnitPickerButton
              variable={props.variable}
              unitType={UnitType.REM}
              onChange={props.onChange}
            />
            <UnitPickerButton
              variable={props.variable}
              unitType={UnitType.CH}
              onChange={props.onChange}
            />
            <UnitPickerButton
              variable={props.variable}
              unitType={UnitType.PERC}
              onChange={props.onChange}
            />
          </UnitPicker>
        </div>
        <VariableSearch
          onChangeRelation={props.onChangeRelation}
          variable={props.variable}
        />
      </DropDown>
    </div>
  );
};
