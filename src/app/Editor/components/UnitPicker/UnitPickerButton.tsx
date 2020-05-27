import React, { useState } from "react";
import { Button } from "@components/Button";
import { UnitType, guessUnitType, changeUnit } from "@app/Editor/helpers/unit";
import { Maybe, Option } from "tiinvo";
import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { IVariable } from "@store/theming/types";
import { OnChangeHandler } from "@app/Editor/types/fields";
import classes from "./UnitPickerButton.module.css";

function getAriaChecked(
  currentValue: UnitType,
  expectedType: UnitType
): "true" | "false" {
  return currentValue === expectedType ? "true" : "false";
}

export interface UnitPickerButtonProps {
  variable: IVariable;
  unitType: UnitType;
  onChange: OnChangeHandler;
}

export const UnitPickerButton = ({
  unitType,
  variable,
  onChange,
}: UnitPickerButtonProps) => {
  const values = useVariableValues(variable);
  const [unit, setUnit] = useState(guessUnitType(values.value));
  const createSetUnitHandler = (unit: UnitType) => () => {
    Maybe(values.isReferencingOtherVariable).cata({
      Nothing: () => {
        Option(onChange).mapOrElse(
          () => void 0,
          (fn) => fn(changeUnit(values.value, unit))
        );
        setUnit(unit);
      },
      Just: () => setUnit(unit),
    });
  };

  return (
    <Button
      role="radio"
      aria-checked={getAriaChecked(unit, unitType)}
      className={classes.UnitPickerButton}
      secondary
      onClick={createSetUnitHandler(unitType)}
      small
    >
      {unitType}
    </Button>
  );
};
