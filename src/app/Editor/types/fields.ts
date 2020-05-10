import { IVariable } from "@store/theming/types";

export type OnChangeHandler = (value: string) => void;

export type OnChangeRelationHandler = (variable: IVariable) => void;

export interface IFieldProps extends PropsClass {
  name: string;
  value?: string;
  onChange: OnChangeHandler;
  onChangeRelation: OnChangeRelationHandler;
}
