export type VariableArray = Array<IVariable>;

export type VariableDomain = string;

export type VariableId = string;

export type VariableType = "color" | "unit" | "text" | "url";

export interface IVariable {
  _id?: VariableId;
  defaultValue?: string;
  domain: VariableDomain;
  name: string;
  type: VariableType;
  value?: string;
}
