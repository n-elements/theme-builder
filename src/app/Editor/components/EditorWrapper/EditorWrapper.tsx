import React, { ReactNode } from "react";
import classes from "./EditorWrapper.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";

export interface IEditorWrapperProps extends PropsClass {
  children: ReactNode;
  header?: ReactNode;
}

export const EditorWrapper = function ({
  children,
  className,
  header,
  ...attributes
}: IEditorWrapperProps) {
  return (
    <div className={clsx(classes.EditorWrapper, className)} {...attributes}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {header}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className={classes.ContentDemo}
      >
        {children}
      </motion.div>
    </div>
  );
};
