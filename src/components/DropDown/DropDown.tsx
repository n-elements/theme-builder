import React, { ReactNode, forwardRef, Ref } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.1 } }}
          transition={{ duration: 0.1, delay: 0.2, ease: "easeOut" }}
          ref={ref}
          className={clsx(classes.DropDown, className)}
          {...attributes}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});
