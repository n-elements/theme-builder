import { IVariable } from "@store/theming/types";

export type OnChangeHandler = (value: string) => void;

export type OnBreakReferenceHandler = () => void;

export type OnChangeRelationHandler = (variableName: string) => void;

export interface IFieldProps extends PropsClass {
  variable: IVariable;
  onBreakReference: OnBreakReferenceHandler;
  onChange: OnChangeHandler;
  onChangeRelation: OnChangeRelationHandler;
}
