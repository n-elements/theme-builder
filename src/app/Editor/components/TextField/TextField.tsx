import { transcodeKeyword } from "@app/Editor/helpers/keywords";
import useVariableValues from "@app/Editor/hooks/useVariableValues";
import { Button } from "@components/Button";
import { DropDown } from "@components/DropDown";
import { FieldWrapper } from "@components/FieldWrapper";
import { Gear } from "@components/Icons/16x";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { defineMessages, useIntl } from "react-intl";
import { useClickAway } from "react-use";
import { Option } from "tiinvo";
import { IFieldProps } from "../../types/fields";
import Keywords from "../Keywords";
import { VariableSearch } from "../VariableSearch";
import classes from "./TextField.module.css";
import useEscapeKey from "@hooks/useEscapeKey";

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

export const TextField = function (props: IUnitFieldProps) {
  const intl = useIntl();
  const ref = useRef(null);
  const values = useVariableValues(props.variable);
  const [open, setOpen] = useState(false);
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);
  const handleChange = (value: any) => {
    Option(props.onChange).mapOrElse(
      () => void 0,
      (fn) => fn(transcodeKeyword(value) as string)
    );
    Option(props.onBreakReference).mapOrElse(
      () => void 0,
      (fn) => fn()
    );
  };
  useClickAway(ref, createOpenHandler(false));
  useEscapeKey(createOpenHandler(false));

  return (
    <div className={clsx(classes.UnitField, props.className)}>
      <FieldWrapper>
        <div className={classes.Field}>
          <input
            className={classes.Input}
            onChange={(event) => handleChange(event.target.value)}
            readOnly={props.readOnly}
            type="text"
            value={values.displayValue}
          />

          <Button
            secondary
            small
            onClick={createOpenHandler(true)}
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
      <DropDown open={open} ref={ref}>
        <div className={classes.UnitBlock}>
          <p data-size="ultra-small">
            <b>{intl.formatMessage(messages.keywords)}</b>
          </p>
          <Keywords onSelect={handleChange} value={values.value} />
        </div>
        <VariableSearch
          onChangeRelation={props.onChangeRelation}
          variable={props.variable}
        />
      </DropDown>
    </div>
  );
};
