import React, { ReactNode } from "react";
import classes from "./index.module.css";

export interface IApplicationSectionProps {
  children?: ReactNode;
}

export default function ApplicationSection(props: IApplicationSectionProps) {
  return (
    <section className={classes.ApplicationSection}>{props.children}</section>
  );
}
