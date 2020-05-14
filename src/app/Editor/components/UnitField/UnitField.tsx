import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";
import { IFieldProps } from "../../types/fields";
import { VariableSearch } from "../VariableSearch";
import classes from "./UnitField.module.css";
import { Button } from "@components/Button";

export interface IUnitFieldProps extends IFieldProps {
  readOnly?: boolean;
}

export const UnitField = function (props: IUnitFieldProps) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);
  const values = useVariableValues(props.variable);

  useClickAway(ref, createOpenHandler(false));

  return (
    <div className={clsx(classes.ColorField, props.className)}>
      <FieldWrapper>
        <div className={classes.Field}>
          <input
            className={classes.Input}
            onChange={(event) =>
              Option(props.onChange).mapOrElse(
                () => void 0,
                (fn) => fn(event.target.value)
              )
            }
            readOnly={props.readOnly}
            type="text"
            tabIndex={-1}
            value={values.displayValue}
          />
          <Button
            secondary
            small
            onClick={createOpenHandler(true)}
            className={classes.UnitPreview}
          >
            REM
          </Button>
        </div>
      </FieldWrapper>
      <DropDown open={open} ref={ref}>
        <div
          className={classes.UnitsContainer}
          role="radiogroup"
          aria-label="Set the value unit"
        >
          <Button
            role="radio"
            aria-checked="true"
            className={classes.UnitButton}
            secondary
            small
          >
            PX
          </Button>
          <Button
            role="radio"
            aria-checked="false"
            className={classes.UnitButton}
            secondary
            small
          >
            EM
          </Button>
          <Button
            role="radio"
            aria-checked="false"
            className={classes.UnitButton}
            secondary
            small
          >
            %
          </Button>
          <Button
            role="radio"
            aria-checked="false"
            className={classes.UnitButton}
            secondary
            small
          >
            REM
          </Button>
          <Button
            role="radio"
            aria-checked="false"
            className={classes.UnitButton}
            secondary
            small
          >
            NONE
          </Button>
          <Button
            role="radio"
            aria-checked="false"
            className={classes.UnitButton}
            secondary
            small
          >
            INH
          </Button>
        </div>
        <VariableSearch
          onChangeRelation={props.onChangeRelation}
          variable={props.variable}
        />
      </DropDown>
    </div>
  );
};
