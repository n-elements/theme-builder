import React, { ReactNode } from "react";
import { AppWrapper } from "@components/AppWrapper";
import { AppHeader } from "@components/AppHeader";

export interface IShellLayoutProps {
  children: ReactNode;
}

export const ShellLayout = function (props: IShellLayoutProps) {
  return (
    <AppWrapper>
      <AppHeader />
      <div>{props.children}</div>
    </AppWrapper>
  );
};
