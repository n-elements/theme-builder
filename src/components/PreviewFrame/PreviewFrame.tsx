import React, { ReactNode, useRef, useEffect, useCallback } from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import useCSSVariables from "@app/Editor/hooks/useCSSVariables";
import clsx from "clsx";
import classes from "./PreviewFrame.module.css";

export interface IPreviewFrameProps extends PropsClass {
  children: ReactNode;
  maxWidth?: number | string;
}

export const PreviewFrame = ({
  children,
  maxWidth,
  className,
  ...props
}: IPreviewFrameProps) => {
  const iframeRef = useRef(null) as any;
  const cssvariables = useCSSVariables();
  const computedWidth =
    typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;

  const previewTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="preconnect" href="https://cdn.jsdelivr.net">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modern-normalize@latest/modern-normalize.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@native-elements/core@0.23.1/dist/native-elements.min.css">
      <script src="https://cdn.jsdelivr.net/npm/what-input@5.2.9/dist/what-input.min.js" defer></script>
      <style>
        section > h5 {
          margin-bottom: 24px;
        }

        section + section {
          margin-top: 40px;
        }
      </style>
    </head>
    <body style="margin: 0; padding: 40px; max-width: ${computedWidth}">
      <div id="mount"></div>
    </body>
  </html>`;

  const setIframeHeight = useCallback(
    (e: any) => {
      const iframe = iframeRef.current.node;
      setTimeout(() => {
        iframe.height = `${iframe.contentWindow.document.body.scrollHeight}px`;
      }, 50);
    },
    [iframeRef]
  );

  useEffect(() => {
    window.addEventListener("resize", setIframeHeight);
    return () => window.removeEventListener("resize", setIframeHeight);
  }, [setIframeHeight]);

  return (
    <Frame
      initialContent={previewTemplate}
      ref={iframeRef}
      mountTarget="#mount"
      scrolling="no"
      className={clsx(classes.PreviewFrame, className)}
      onLoad={setIframeHeight}
      {...props}
    >
      <FrameContextConsumer>
        {({ document }) => {
          Object.keys(cssvariables).forEach((key) =>
            document.documentElement.style.setProperty(key, cssvariables[key])
          );
          document.documentElement.addEventListener("click", (e: any) =>
            setIframeHeight(e)
          );
          return children;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};
