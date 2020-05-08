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
      <AnimatePresence>
        {variables.map((variable, index) => (
          <motion.div
            key={`${index}-var`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
