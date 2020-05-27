import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { Button } from "@components/Button";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Option, Maybe } from "tiinvo";
import { guessUnitType, UnitType, changeUnit } from "../../helpers/unit";
import { IFieldProps } from "../../types/fields";
import { VariableSearch } from "../VariableSearch";
import classes from "./UnitField.module.css";

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
  const ref = useRef(null);
  const values = useVariableValues(props.variable);
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState(guessUnitType(values.value));
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);
  const createSetUnitHandler = (unit: UnitType) => () => {
    Maybe(values.isReferencingOtherVariable).cata({
      Nothing: () => {
        Option(props.onChange).mapOrElse(
          () => void 0,
          (fn) => fn(changeUnit(values.value, unit))
        );
        setUnit(unit);
      },
      Just: () => setUnit(unit),
    });
  };

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
            <b>Keywords</b>
          </p>
          <div
            className={classes.UnitsContainer}
            role="radiogroup"
            aria-label="Set the value unit"
          >
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.REV)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.REV)}
              small
            >
              {UnitType.REV}
            </Button>
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.UNS)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.UNS)}
              small
            >
              {UnitType.UNS}
            </Button>
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.INIT)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.INIT)}
              small
            >
              {UnitType.INIT}
            </Button>
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.INH)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.INH)}
              small
            >
              {UnitType.INH}
            </Button>
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.NONE)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.NONE)}
              small
            >
              {UnitType.NONE}
            </Button>
          </div>
        </div>
        <div className={classes.UnitBlock}>
          <p data-size="ultra-small">
            <b>Common units</b>
          </p>
          <div
            className={classes.UnitsContainer}
            role="radiogroup"
            aria-label="Set the value unit"
          >
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.PX)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.PX)}
              small
            >
              {UnitType.PX}
            </Button>
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.EM)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.EM)}
              small
            >
              {UnitType.EM}
            </Button>
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.REM)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.REM)}
              small
            >
              {UnitType.REM}
            </Button>
            <Button
              role="radio"
              aria-checked={getAriaChecked(unit, UnitType.PERC)}
              className={classes.UnitButton}
              secondary
              onClick={createSetUnitHandler(UnitType.PERC)}
              small
            >
              {UnitType.PERC}
            </Button>
          </div>
        </div>
        <VariableSearch
          onChangeRelation={props.onChangeRelation}
          variable={props.variable}
        />
      </DropDown>
    </div>
  );
};
