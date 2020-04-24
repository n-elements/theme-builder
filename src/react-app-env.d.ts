/// <reference types="react-scripts" />

declare module "*.module.pcss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
