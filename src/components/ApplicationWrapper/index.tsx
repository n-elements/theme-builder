import React, { ReactNode } from "react";
import classes from "./index.module.css";

export interface IApplicationWrapperProps {
  children: ReactNode;
}

export default function ApplicationWrapper(props: IApplicationWrapperProps) {
  return <main className={classes.ApplicationWrapper}>{props.children}</main>;
}
