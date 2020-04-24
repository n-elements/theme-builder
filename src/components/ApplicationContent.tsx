import routes from "@routes";
import React, { ReactNode } from "react";
import ApplicationIconSidebar from "./ApplicationIconSidebar";
import ApplicationNavIcon from "./ApplicationNavIcon";
import ApplicationSection from "./ApplicationSection";

export interface IApplicationContentProps {
  children?: ReactNode;
}

export default function ApplicationContent(props: IApplicationContentProps) {
  return (
    <ApplicationSection>
      <ApplicationIconSidebar>
        <ApplicationNavIcon to={routes.editor.colours}>
          Colours
        </ApplicationNavIcon>
        <ApplicationNavIcon to={routes.editor.settings}>
          Document
        </ApplicationNavIcon>
        <ApplicationNavIcon to={routes.editor.elements}>
          Elements
        </ApplicationNavIcon>
        <ApplicationNavIcon to={routes.editor.typography}>
          Typography
        </ApplicationNavIcon>
      </ApplicationIconSidebar>
      {props.children}
    </ApplicationSection>
  );
}
