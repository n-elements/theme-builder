import { transcodeKeyword } from "@app/Editor/helpers/keywords";
import useFieldEditing from "@app/Editor/hooks/useFieldEditing";
import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { Button } from "@components/Button";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import { Gear } from "@components/Icons/16x";
import clsx from "clsx";
import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { Maybe, Option } from "tiinvo";
import { changeUnit, UnitType } from "../../helpers/unit";
import { IFieldProps } from "../../types/fields";
import Keywords from "../Keywords";
import Units from "../Units";
import { VariableSearch } from "../VariableSearch";
import classes from "./UnitField.module.css";

const messages = defineMessages({
  keywords: {
    defaultMessage: "Keywords",
    id: "app.Editor.components.UnitField.keywords",
  },
  commonUnits: {
    defaultMessage: "Common units",
    id: "app.Editor.components.UnitField.commonUnits",
  },
});

export interface IUnitFieldProps extends IFieldProps {
  readOnly?: boolean;
}

export const UnitField = function (props: IUnitFieldProps) {
  const field = useFieldEditing();
  const intl = useIntl();
  const values = useVariableValues(props.variable);
  const handleChange = (value: any) => {
    Option(props.onChange).mapOrElse(
      () => void 0,
      (fn) => fn(value)
    );
    Option(props.onBreakReference).mapOrElse(
      () => void 0,
      (fn) => fn()
    );
  };
  const handleUnitChange = (unit: UnitType) => {
    Maybe(values.isReferencingOtherVariable).cata({
      Nothing: () => {
        Option(props.onChange).mapOrElse(
          () => void 0,
          (fn) => fn(changeUnit(values.value, unit))
        );
      },
      Just: () => void 0,
    });
  };

  return (
    <div className={clsx(classes.UnitField, props.className)}>
      <FieldWrapper>
        <div className={classes.Field}>
          <input
            className={classes.Input}
            onChange={(event) => handleChange(event.target.value)}
            readOnly={props.readOnly}
            type="text"
            value={transcodeKeyword(values.displayValue)}
          />
          <Button
            secondary
            small
            onClick={field.createOpenHandler(true)}
            className={classes.SettingButton}
          >
            <Gear />
          </Button>
        </div>
      </FieldWrapper>
      {values.displayValue !== values.value ? (
        <span className={classes.RelatedValue}>
          <small>{values.value}</small>
        </span>
      ) : null}
      <DropDown open={field.open} ref={field.ref}>
        <div className={classes.UnitBlock}>
          <p data-size="ultra-small">
            <b>{intl.formatMessage(messages.keywords)}</b>
          </p>
          <Keywords onSelect={handleChange} value={values.value} />
        </div>
        <div className={classes.UnitBlock}>
          <p data-size="ultra-small">
            <b>{intl.formatMessage(messages.commonUnits)}</b>
          </p>

          <Units value={values.value} onSelect={handleUnitChange} />
        </div>
        <VariableSearch
          onChangeRelation={props.onChangeRelation}
          variable={props.variable}
        />
      </DropDown>
    </div>
  );
};
