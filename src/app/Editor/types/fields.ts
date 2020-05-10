export type OnChangeHandler = (value: string) => void;

export type OnChangeRelationHandler = (variableName: string) => void;

export interface IFieldProps extends PropsClass {
  name: string;
  value?: string;
  onChange: OnChangeHandler;
  onChangeRelation: OnChangeRelationHandler;
}
