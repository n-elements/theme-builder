import { UnitType, guessUnitType } from "../helpers/unit";
import React from "react";
import { ButtonsGroup, ButtonsGroupButton } from "@components/ButtonsGroup";
import { VariableValue } from "@store/theming/types";
import { Option } from "tiinvo";

export interface IUnitsProps {
  value?: VariableValue;
  onSelect?: (unit: UnitType) => any;
}

function isChecked(value: VariableValue, unit: UnitType): boolean {
  return guessUnitType(value) === unit;
}

export default function Units(props: IUnitsProps) {
  const createOnClickHandler = (unit: UnitType) => {
    return Option(props.onSelect).mapOrElse(
      () => () => void 0,
      (fn) => () => fn(unit)
    );
  };

  return (
    <ButtonsGroup>
      <ButtonsGroupButton
        text={UnitType.PX}
        checked={isChecked(props.value, UnitType.PX)}
        onClick={createOnClickHandler(UnitType.PX)}
      />
      <ButtonsGroupButton
        text={UnitType.EM}
        checked={isChecked(props.value, UnitType.EM)}
        onClick={createOnClickHandler(UnitType.EM)}
      />
      <ButtonsGroupButton
        text={UnitType.REM}
        checked={isChecked(props.value, UnitType.REM)}
        onClick={createOnClickHandler(UnitType.REM)}
      />
      <ButtonsGroupButton
        text={UnitType.CH}
        checked={isChecked(props.value, UnitType.CH)}
        onClick={createOnClickHandler(UnitType.CH)}
      />
      <ButtonsGroupButton
        text={UnitType.PERC}
        checked={isChecked(props.value, UnitType.PERC)}
        onClick={createOnClickHandler(UnitType.PERC)}
      />
      <ButtonsGroupButton
        text={UnitType.NONE}
        checked={isChecked(props.value, UnitType.NONE)}
        onClick={createOnClickHandler(UnitType.NONE)}
      />
    </ButtonsGroup>
  );
}
