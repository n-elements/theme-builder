export type VariableArray = Array<IVariable>;

export type VariableGroup = string;

export type VariableId = string;

export type VariableType = "color" | "unit" | "text";

export interface IVariable {
  _id?: VariableId;
  defaultValue?: string;
  name: string;
  group: VariableGroup;
  type: VariableType;
  value?: string;
}
