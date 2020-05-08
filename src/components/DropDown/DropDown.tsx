import React, { ReactNode, forwardRef, Ref } from "react";
import clsx from "clsx";
import classes from "./DropDown.module.css";

export interface IDropDownProps extends PropsClass {
  children: ReactNode;
  open: boolean;
}

export const DropDown = forwardRef(function (
  { children, className, open, ...attributes }: IDropDownProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <>
      {open && (
        <div
          ref={ref}
          className={clsx(classes.DropDown, className)}
          {...attributes}
        >
          {children}
          <div className={classes.FieldContainer}>
            <input type="text" placeholder="Search variable" />
          </div>
        </div>
      )}
    </>
  );
});
