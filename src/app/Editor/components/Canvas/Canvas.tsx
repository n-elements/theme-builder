import clsx from "clsx";
import React, { ComponentPropsWithRef } from "react";
import classes from "./Canvas.module.css";

export interface ICanvasProps
  extends Partial<ComponentPropsWithRef<"section">> {}

function Canvas(props: ICanvasProps) {
  const { className, ...attributes } = props;

  return (
    <section className={clsx(classes.Canvas, className)} {...attributes} />
  );
}

export default Canvas;
