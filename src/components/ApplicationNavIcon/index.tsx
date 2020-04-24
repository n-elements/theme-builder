import classes from "./index.module.css";
import { Link } from "react-router-dom";
import React, { ReactNode } from "react";

export interface IApplicationNavIconProps {
  children?: ReactNode;
  to: string;
}

export default function ApplicationNavIcon(props: IApplicationNavIconProps) {
  return (
    <Link className={classes.ApplicationNavIcon} to={props.to}>
      {props.children}
    </Link>
  );
}
