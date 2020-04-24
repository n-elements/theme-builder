import { ReactNode } from "react";
import React from "react";
import classes from "./index.module.css";

export interface IApplicationEditableSettingsContainerProps {
  children?: ReactNode;
}

export default function ApplicationEditableSettingsContainer(
  props: IApplicationEditableSettingsContainerProps
) {
  return (
    <section className={classes.ApplicationEditableSettingsContainer}>
      {props.children}
    </section>
  );
}
