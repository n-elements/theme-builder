import React from "react";
import clsx from "clsx";
import classes from "./PropItem.module.css";
import { ColorField } from "@components/ColorField/ColorField";
import { Rename, Bin } from "@components/Icons/12x";
import { IVariable } from "@store/theming/types";

export interface IPropItemProps extends PropsClass, IVariable {
  showActions?: boolean;
}

export const PropItem = function ({
  className,
  type,
  showActions,
  name,
  value,
  ...attributes
}: IPropItemProps) {
  return (
    <fieldset className={clsx(classes.PropItem, className)} {...attributes}>
      <div className={classes.FieldHeader}>
        <input
          readOnly={true}
          tabIndex={-1}
          className={classes.PropName}
          type="text"
          defaultValue={`--${name}`}
        />

        {showActions && (
          <div className={classes.Actions}>
            <button arial-label="Rename Property" className={classes.Action}>
              <Rename aria-hidden="true" />
            </button>
            <button arial-label="Delete Property" className={classes.Action}>
              <Bin aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      {type === "color" && <ColorField defaultValue={value} />}
    </fieldset>
  );
};

PropItem.defaultProps = {
  showActions: false,
} as Partial<IPropItemProps>;
