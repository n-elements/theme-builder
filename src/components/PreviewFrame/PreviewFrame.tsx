import React, {
  ReactNode,
  CSSProperties,
  useRef,
  useEffect,
  useCallback,
} from "react";
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
  const dynamicStyle = { "--maxWidth": computedWidth } as CSSProperties;

  const previewTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="preconnect" href="https://cdn.jsdelivr.net">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@native-elements/core@0.20.0/dist/native-elements.min.css">
    </head>
    <body style="margin: 0; padding: 40px">
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
      style={dynamicStyle}
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
          return children;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};
