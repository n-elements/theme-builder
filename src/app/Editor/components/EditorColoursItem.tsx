import { IVariable } from "@store/theming/types";
import { motion } from "framer-motion";
import React from "react";
import { ColorSwatch } from "./ColorSwatch";
import useVariableValues from "../hooks/useVariableValues";

export interface IEditorColoursItemProps {
  variable: IVariable;
}

export default function EditorColoursItem(props: IEditorColoursItemProps) {
  const values = useVariableValues(props.variable);

  return (
    <motion.div
      key={props.variable._id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.3 }}
      positionTransition={{ ease: "easeOut" }}
    >
      <ColorSwatch
        key={props.variable._id}
        propName={props.variable.name}
        value={values.value}
      />
    </motion.div>
  );
}
