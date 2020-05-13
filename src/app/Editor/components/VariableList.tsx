import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import useVariables from "../hooks/useVariables";
import { motion, AnimatePresence } from "framer-motion";
import { AddVariable } from "./AddVariable";
import { Variable } from "./Variable";

export interface IVariableListProps {
  showActions?: boolean;
  showAdd?: boolean;
}

export default function VariableList({
  showActions,
  showAdd,
}: IVariableListProps) {
  const location = useLocation();
  const variables = useVariables(location.pathname);

  return (
    <Fragment>
      <AnimatePresence initial={false}>
        {variables.map((variable, index) => (
          <motion.div
            key={variable._id}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 10, transition: { duration: 0.1 } }}
            transition={{ duration: 0.1, delay: 0.13 }}
            positionTransition={{ ease: "easeOut" }}
          >
            <Variable
              key={index}
              showActions={showActions}
              variable={variable}
            />
          </motion.div>
        ))}
        {showAdd && (
          <motion.div positionTransition={{ ease: "easeOut" }}>
            <AddVariable />
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}

VariableList.defaultProps = {
  showAdd: false,
} as Partial<IVariableListProps>;
