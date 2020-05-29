import clsx from "clsx";
import React, { MouseEvent, ReactNode } from "react";
import { Option } from "tiinvo";
import classes from "./Expander.module.css";

export interface IExpanderProps extends PropsClass {
  children: ReactNode;
  onExpand?: React.MouseEventHandler<HTMLDetailsElement>;
  summary?: string | ReactNode;
  open?: boolean;
}

export const Expander = function ({
  children,
  className,
  onExpand,
  summary,
  open,
  ...attributes
}: IExpanderProps) {
  const handleClick = (event: MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();

    Option(onExpand).mapOrElse(
      () => void 0,
      (fn) => fn(event)
    );
  };

  return (
    <details
      open={open}
      onClick={handleClick}
      className={clsx(classes.Expander, className)}
      {...attributes}
    >
      <summary>
        <strong>{summary}</strong>
      </summary>
      {open && <div>{children}</div>}
    </details>
  );
};

Expander.defaultProps = {
  summary: "Click to expand",
  open: false,
} as Partial<IExpanderProps>;
