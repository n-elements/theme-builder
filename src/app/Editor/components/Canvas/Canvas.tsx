import withCustomVariables from "@app/Editor/hocs/withCustomVariables";
import clsx from "clsx";
import React, { ComponentPropsWithRef } from "react";
import classes from "./Canvas.module.css";

export interface ICanvasProps
  extends Partial<ComponentPropsWithRef<"section">> {}

function Canvas(props: ICanvasProps) {
  const { className, ...otherprops } = props;

  return (
    <section className={clsx(classes.Canvas, className)} {...otherprops} />
  );
}

export default withCustomVariables(Canvas);
