import React from "react";
import classes from "./VariableSearch.module.css";
import clsx from "clsx";

export interface IVariableSearchProps extends PropsClass {}

export const VariableSearch = function ({
  className,
  ...attributes
}: IVariableSearchProps) {
  return (
    <div className={clsx(classes.VariableSearch, className)} {...attributes}>
      <input type="text" list="variables" placeholder="Search variable" />
      <datalist id="variables">
        <option value="Firefox">Firefox</option>
        <option value="Chrome">Chrome</option>
        <option value="Opera">Opera</option>
        <option value="Safari">Safari</option>
      </datalist>
    </div>
  );
};
