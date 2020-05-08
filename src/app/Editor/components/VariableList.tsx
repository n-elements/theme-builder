import React from "react";
import { useLocation } from "react-router-dom";
import useVariables from "../hooks/useVariables";
import { motion, AnimatePresence } from "framer-motion";
import { Variable } from "./Variable";

export interface IVariableListProps {
  showActions?: boolean;
}

export default function VariableList(props: IVariableListProps) {
  const location = useLocation();
  const variables = useVariables(location.pathname);

  return (
    <>
      <AnimatePresence initial={false}>
        {variables.map((variable, index) => (
          <motion.div
            key={variable._id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Variable
              key={index}
              showActions={props.showActions}
              variable={variable}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
