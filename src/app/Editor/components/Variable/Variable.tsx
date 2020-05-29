import { formatVariableName } from "@app/Editor/helpers/variable";
import useVariableEditing from "@app/Editor/hooks/useVariableEditing";
import { Bin, Check, Rename } from "@components/Icons/12x";
import { IVariable } from "@store/theming/types";
import clsx from "clsx";
import React, { KeyboardEvent, useRef, useState, MouseEvent } from "react";
import classes from "./Variable.module.css";
import VariableField from "./VariableField";
import { cleanVariableName } from "@store/theming/helpers";

export interface IVariableProps extends PropsClass {
  variable: IVariable;
  showActions?: boolean;
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
  const handleBreakReference = () =>
    variableEditing.deleteReferenceToVariable(variable);

  const handleChange = (value?: string) =>
    variableEditing.update({ ...variable, value });

  const handleChangeRelation = (relatingToVariable: string) =>
    variableEditing.addReferenceToVariable(variable._id, relatingToVariable);

  function confirmOnEnter(event: KeyboardEvent) {
    if (event.key === "Enter") {
      setEditingLabel(!editingLabel);
    }
  }

  function handleEditing(event: MouseEvent<HTMLButtonElement>) {
    if (editingLabel === true) {
      setEditingLabel(false);
    } else {
      setEditingLabel(true);
      ref.current?.focus();
      ref.current?.select();
    }
  }

  return (
    <fieldset
      className={clsx(classes.Variable, className)}
      tabIndex={-1}
      {...attributes}
    >
      <div className={classes.FieldHeader}>
        <input
          className={classes.PropName}
          onChange={(event) =>
            variableEditing.update({
              ...variable,
              name: cleanVariableName(event.target.value),
            })
          }
          value={formatVariableName(variable.name)}
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
              onClick={handleEditing}
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
      <VariableField
        variable={variable}
        onBreakReference={handleBreakReference}
        onChange={handleChange}
        onChangeRelation={handleChangeRelation}
      />
    </fieldset>
  );
}

Variable.defaultProps = {
  showActions: false,
} as Partial<IVariableProps>;
