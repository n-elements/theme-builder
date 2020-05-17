import React, { ReactNode, useState, MouseEvent } from "react";
import classes from "./Expander.module.css";
import clsx from "clsx";

export interface IExpanderProps extends PropsClass {
  children: ReactNode;
  summary?: string | ReactNode;
  open?: boolean;
}

export const Expander = function ({
  children,
  className,
  summary,
  open,
  ...attributes
}: IExpanderProps) {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpen = (event: MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <details
      open={isOpen}
      onClick={handleOpen}
      className={clsx(classes.Expander, className)}
      {...attributes}
    >
      <summary>{summary}</summary>
      {isOpen && <div>{children}</div>}
    </details>
  );
};

Expander.defaultProps = {
  summary: "Click to expand",
  open: false,
} as Partial<IExpanderProps>;
