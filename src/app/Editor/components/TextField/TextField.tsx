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
import classes from "./TextField.module.css";
import { UnitPicker, UnitPickerButton } from "../UnitPicker";
import { motion, AnimatePresence } from "framer-motion";
import { Gear } from "@components/Icons/16x";

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
): boolean {
  return currentValue === expectedType ? true : false;
}

export const TextField = function (props: IUnitFieldProps) {
  const intl = useIntl();
  const ref = useRef(null);
  const values = useVariableValues(props.variable);
  const [open, setOpen] = useState(false);
  const [unit, setValue] = useState(guessUnitType(values.value));
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);
  const createSetUnitHandler = (unit: UnitType) => () => {
    Maybe(values.isReferencingOtherVariable).cata({
      Nothing: () => {
        Option(props.onChange).mapOrElse(
          () => void 0,
          (fn) => fn(changeUnit(values.value, unit))
        );
        setValue(unit);
      },
      Just: () => setValue(unit),
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
                  setValue(guessUnitType(newValue));
                }
              );
              Option(props.onBreakReference).mapOrElse(
                () => void 0,
                (fn) => fn()
              );
            }}
            readOnly={props.readOnly}
            type="text"
            value={values.displayValue}
          />
          <AnimatePresence>
            {values.displayValue !== values.value ? (
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5, transition: { duration: 0.1 } }}
                className={classes.RelatedValue}
              >
                <small>{values.value}</small>
              </motion.span>
            ) : null}
          </AnimatePresence>
          <Button
            secondary
            small
            onClick={createOpenHandler(true)}
            className={classes.SettingButton}
          >
            <Gear />
          </Button>
        </div>
      </FieldWrapper>
      <DropDown open={open} ref={ref}>
        <div className={classes.UnitBlock}>
          <p data-size="ultra-small">
            <b>{intl.formatMessage(messages.keywords)}</b>
          </p>
          <UnitPicker>
            <UnitPickerButton
              unit={UnitType.REV}
              checked={getAriaChecked(unit, UnitType.REV)}
              onClick={createSetUnitHandler(UnitType.REV)}
            />
            <UnitPickerButton
              unit={UnitType.UNS}
              checked={getAriaChecked(unit, UnitType.UNS)}
              onClick={createSetUnitHandler(UnitType.UNS)}
            />
            <UnitPickerButton
              unit={UnitType.INIT}
              checked={getAriaChecked(unit, UnitType.INIT)}
              onClick={createSetUnitHandler(UnitType.INIT)}
            />
            <UnitPickerButton
              unit={UnitType.INH}
              checked={getAriaChecked(unit, UnitType.INH)}
              onClick={createSetUnitHandler(UnitType.INH)}
            />
            <UnitPickerButton
              unit={UnitType.NONE}
              checked={getAriaChecked(unit, UnitType.NONE)}
              onClick={createSetUnitHandler(UnitType.NONE)}
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
