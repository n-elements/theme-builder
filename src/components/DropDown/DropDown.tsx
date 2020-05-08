import React, { ReactNode, forwardRef, Ref } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 10, transition: { duration: 0.1 } }}
      transition={{ duration: 0.1, delay: 0.13 }}
    >
      {open && (
        <div
          ref={ref}
          className={clsx(classes.DropDown, className)}
          {...attributes}
        >
          {children}
        </div>
      )}
    </motion.div>
  );
});
