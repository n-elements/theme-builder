import { IVariable, VariableValue } from "@store/theming/types";
import useReferencedVariable from "./useReferencedVariable";
import {
  getValueOrRelatedVariableValue,
  getDisplayValueOrRelatedVariableName,
} from "../helpers/variable";

export interface IUseVariableValuesReturnValue {
  displayValue: string;
  value: VariableValue;
}

export default function useVariableValues(variable: IVariable) {
  const maybeRelatedVariable = useReferencedVariable(variable);
  const displayValue = getDisplayValueOrRelatedVariableName(
    variable,
    maybeRelatedVariable
  );
  const value = getValueOrRelatedVariableValue(variable, maybeRelatedVariable);

  return { displayValue, value };
}
