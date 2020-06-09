export type VariableArray = Array<IVariable>;

export type VariableDomain = string;

export type VariableId = string;

export type VariableType =
  | "border"
  | "box-shadow"
  | "color"
  | "font-family"
  | "textfield-resize"
  | "filter"
  | "unit"
  | "unit-multiple"
  | "text"
  | "url";

export type VariableValue = string | undefined;

export interface IVariable {
  _clonedfrom?: VariableId;
  _id?: VariableId;
  _referenceId?: VariableId;
  defaultValue?: string;
  domain: VariableDomain;
  name: string;
  element?: string;
  type: VariableType;
  value?: VariableValue;
}

export interface IVariableRelation {
  id?: VariableId;
  externalVariableName?: string;
}
