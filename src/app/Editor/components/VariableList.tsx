import React from "react";
import { useLocation } from "react-router-dom";
import useVariables from "../hooks/useVariables";
import { motion, AnimatePresence } from "framer-motion";
import { AddVariable } from "./AddVariable";
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
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 10, transition: { duration: 0.1 } }}
            transition={{ duration: 0.1 }}
            positionTransition={{ ease: "easeOut" }}
          >
            <Variable
              key={index}
              showActions={props.showActions}
              variable={variable}
            />
          </motion.div>
        ))}
        <motion.div positionTransition={{ ease: "easeOut" }}>
          <AddVariable />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
