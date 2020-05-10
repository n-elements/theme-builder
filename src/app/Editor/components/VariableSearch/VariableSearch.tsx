import React, { ReactElement } from "react";
import classes from "./VariableSearch.module.css";
import clsx from "clsx";

export interface IVariableSearchProps extends PropsClass {
  children:
    | ReactElement<HTMLOptionElement>
    | Array<ReactElement<HTMLOptionElement>>;
}

export const VariableSearch = function ({
  children,
  className,
  ...attributes
}: IVariableSearchProps) {
  return (
    <div className={clsx(classes.VariableSearch, className)} {...attributes}>
      <input type="text" list="variables" placeholder="Search variable" />
      <datalist id="variables">{children}</datalist>
    </div>
  );
};
