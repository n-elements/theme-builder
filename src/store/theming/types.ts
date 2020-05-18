export type VariableArray = Array<IVariable>;

export type VariableDomain = string;

export type VariableId = string;

export type VariableType = "color" | "unit" | "unit-multiple" | "text" | "url";

export type VariableValue = string | undefined;

export interface IVariable {
  _id?: VariableId;
  _referenceId?: VariableId;
  defaultValue?: string;
  domain: VariableDomain;
  name: string;
  type: VariableType;
  value?: VariableValue;
}

export interface IVariableRelation {
  id?: VariableId;
  externalVariableName?: string;
}
