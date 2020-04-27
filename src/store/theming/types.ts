export type VariableType = "color" | "unit" | "text";

export interface IVariable {
  defaultValue?: string;
  name: string;
  type: VariableType;
  value?: string;
}
