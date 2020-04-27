import { ComponentType, createElement, CSSProperties } from "react";

type EnhancedCSSProperties = CSSProperties & { [index: string]: string };

export default function withCustomVariables<T>(
  Component: ComponentType<T & { style: EnhancedCSSProperties }>
): ComponentType<T> {
  return (props) => {
    const style = {};

    return createElement(Component, {
      ...props,
      style,
    });
  };
}
