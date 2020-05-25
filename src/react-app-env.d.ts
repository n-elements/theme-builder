/// <reference types="react-scripts" />

declare module "*.module.pcss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "@native-elements/core/dist/props" {
  export interface IVariable {
    defaultValue: string;
    domain: string;
    element: string;
    name: string;
    tokenValue: string;
    type: string;
  }

  const variables: IVariable[];

  export default variables;
}
