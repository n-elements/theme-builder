import React from "react";
import clsx from "clsx";
import classes from "./PropItem.module.css";
import { ColorField } from "@components/ColorField/ColorField";
import { Rename, Bin } from "@components/Icons/12x";

export interface IPropItemProps extends PropsClass {
  type: "color" | "unit" | "text";
  showActions?: boolean;
  propName: string;
  propValue?: string;
  defaultValue?: string;
}

export const PropItem = function ({
  className,
  type,
  showActions,
  propName,
  propValue,
  ...props
}: IPropItemProps) {
  return (
    <fieldset className={clsx(classes.PropItem, className)} {...props}>
      <div className={classes.FieldHeader}>
        <input
          readOnly={true}
          tabIndex={-1}
          className={classes.PropName}
          type="text"
          defaultValue={`--${propName}`}
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
      {type === "color" && <ColorField defaultValue={propValue} />}
    </fieldset>
  );
};

PropItem.defaultProps = {
  showActions: false,
} as Partial<IPropItemProps>;
