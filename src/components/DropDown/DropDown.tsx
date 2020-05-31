import React, { ReactNode, forwardRef, Ref } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./DropDown.module.css";

export interface IDropDownProps extends PropsClass {
  children: ReactNode;
  open: boolean;
  floating?: boolean;
  position?: "left" | "right";
}

export const DropDown = forwardRef(function (
  {
    children,
    className,
    open,
    position,
    floating,
    ...attributes
  }: IDropDownProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          data-floating={floating}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.1 } }}
          transition={{ duration: 0.1, delay: 0.2, ease: "easeOut" }}
          className={clsx(classes.DropDown, className)}
          data-position={position}
          {...attributes}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

DropDown.defaultProps = {
  position: "right",
  floating: false,
} as Partial<IDropDownProps>;
