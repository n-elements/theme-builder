import { ColorField } from "@components/ColorField";
import { IVariable } from "@store/theming/types";
import React, { useState, useRef } from "react";
import useVariableEditing from "../../hooks/useVariableEditing";
import { Maybe } from "tiinvo";
import classes from "./Variable.module.css";

export interface IVariableProps {
  labelEditable?: boolean;
  onEditLabel?: (value: string) => void;
  removable?: boolean;
  variable: IVariable;
}

interface IEditableVariable {
  variable: IVariable;
  onChange(value?: string): void;
}

function EditableVariable(props: IEditableVariable) {
  switch (props.variable.type) {
    case "color":
      return (
        <ColorField
          className={classes.VariableInput}
          defaultValue={props.variable.defaultValue}
          onChange={props.onChange}
          value={props.variable.value}
        />
      );
    default:
      return null;
  }
}

function formatVariableLabel(variableName: string): string {
  return Maybe(variableName.indexOf("--") >= 0).cata({
    Just: () => variableName,
    Nothing: () => "--" + variableName,
  });
}

export default function Variable(props: IVariableProps) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [editingLabel, setEditingLabel] = useState(false);
  const variableEditing = useVariableEditing(props.variable.domain);
  const handleChange = (value?: string) =>
    variableEditing.update({ ...props.variable, value });

  return (
    <label className={classes.Variable}>
      <input
        className={classes.VariableLabel}
        ref={ref}
        readOnly={!editingLabel}
        onChange={(event) =>
          variableEditing.update({
            ...props.variable,
            name: event.target.value,
          })
        }
        type="text"
        value={formatVariableLabel(props.variable.name)}
      />
      {props.labelEditable && (
        <button
          className={classes.VariableContextualButton}
          onClick={() => {
            setEditingLabel(!editingLabel);
            ref.current?.focus();
          }}
        >
          E
        </button>
      )}
      {props.removable && (
        <button
          className={classes.VariableContextualButton}
          onClick={() => variableEditing.delete(props.variable)}
        >
          X
        </button>
      )}
      <EditableVariable variable={props.variable} onChange={handleChange} />
    </label>
  );
}
