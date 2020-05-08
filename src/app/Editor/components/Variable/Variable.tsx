import React, { useRef, useState, KeyboardEvent } from "react";
import useVariableEditing from "@app/Editor/hooks/useVariableEditing";
import { Bin, Rename, Check } from "@components/Icons/12x";
import { IVariable } from "@store/theming/types";
import clsx from "clsx";
import { Maybe } from "tiinvo";
import VariableField from "./VariableField";
import classes from "./Variable.module.css";

export interface IVariableProps extends PropsClass {
  variable: IVariable;
  showActions?: boolean;
}

function formatVariableLabel(variableName: string): string {
  return Maybe(variableName.indexOf("--") >= 0).cata({
    Just: () => variableName,
    Nothing: () => "--" + variableName,
  });
}

export function Variable({
  className,
  showActions,
  variable,
  ...attributes
}: IVariableProps) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [editingLabel, setEditingLabel] = useState(false);
  const variableEditing = useVariableEditing(variable.domain);
  const handleChange = (value?: string) =>
    variableEditing.update({ ...variable, value });

  function confirmOnEnter(event: KeyboardEvent) {
    if (event.key === "Enter") {
      setEditingLabel(!editingLabel);
    }
  }

  return (
    <fieldset
      tabIndex={-1}
      className={clsx(classes.ShellLayout, className)}
      {...attributes}
    >
      <div className={classes.FieldHeader}>
        <input
          className={classes.PropName}
          onChange={(event) =>
            variableEditing.update({
              ...variable,
              name: event.target.value,
            })
          }
          value={formatVariableLabel(variable.name)}
          readOnly={!editingLabel}
          ref={ref}
          tabIndex={editingLabel ? 0 : -1}
          type="text"
          onKeyPress={confirmOnEnter}
        />

        {showActions && (
          <div className={classes.Actions}>
            <button
              arial-label="Rename Property"
              className={classes.Action}
              data-editing={editingLabel}
              onClick={() => {
                setEditingLabel(!editingLabel);
                ref.current?.focus();
              }}
            >
              {editingLabel ? (
                <Check aria-hidden="true" />
              ) : (
                <Rename aria-hidden="true" />
              )}
            </button>
            <button
              arial-label="Delete Property"
              className={classes.Action}
              onClick={() => variableEditing.delete(variable)}
            >
              <span>
                <Bin aria-hidden="true" />
              </span>
            </button>
          </div>
        )}
      </div>
      <VariableField variable={variable} onChange={handleChange} />
    </fieldset>
  );
}

Variable.defaultProps = {
  showActions: false,
} as Partial<IVariableProps>;
