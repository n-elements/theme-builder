import classes from "./index.module.css";
import { ReactNode } from "react";
import React from "react";

export interface IApplicationIconSidebarProps {
  children?: ReactNode;
}

export default function ApplicationIconSidebar(
  props: IApplicationIconSidebarProps
) {
  return (
    <section className={classes.ApplicationIconSidebar}>
      {props.children}
    </section>
  );
}
