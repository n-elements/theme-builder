import React, { ReactNode } from "react";
import classes from "./EditorWrapper.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";

export interface IEditorWrapperProps extends PropsClass {
  children: ReactNode;
}

export const EditorWrapper = function ({
  children,
  className,
  ...attributes
}: IEditorWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={clsx(classes.EditorWrapper, className)}
      {...attributes}
    >
      {children}
    </motion.div>
  );
};
