import React, { ReactNode } from "react";
import classes from "./Toolbar.module.css";
import { Resizable } from "re-resizable";

export interface IToolbarProps {
  actions?: ReactNode;
  toolbarArea?: ReactNode;
}

export default function Toolbar(props: IToolbarProps) {
  const { actions, toolbarArea } = props;

  return (
    <Resizable
      minWidth={380}
      maxWidth={600}
      defaultSize={{
        width: 380,
        height: "auto",
      }}
      bounds="parent"
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <div className={classes.Toolbar}>
        <div className={classes.Scroller}>{toolbarArea}</div>
        {actions && <div className={classes.Actions}>{actions}</div>}
      </div>
    </Resizable>
  );
}
