import React from "react";
import classes from "./BrowsersLogos.module.css";
import clsx from "clsx";

export interface IBrowsersLogosProps extends PropsClass {
  inline?: boolean;
  edge?: boolean;
  safari?: boolean;
  firefox?: boolean;
  chrome?: boolean;
  opera?: boolean;
}

export function BrowsersLogos({
  className,
  inline,
  edge,
  safari,
  firefox,
  chrome,
  opera,
  ...attributes
}: IBrowsersLogosProps) {
  return (
    <div
      className={clsx(classes.BrowsersLogos, className)}
      data-inline={inline}
      {...attributes}
    >
      <small>
        <strong>Supported by:</strong>
      </small>
      {edge && (
        <img
          src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_32x32.png"
          width="16px"
          alt="Chromium Edge"
          draggable={false}
        />
      )}
      {safari && (
        <img
          src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_32x32.png"
          width="16px"
          alt="Apple Safari"
          draggable={false}
        />
      )}
      {firefox && (
        <img
          src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_32x32.png"
          width="16px"
          alt="Mozilla Firefox"
          draggable={false}
        />
      )}
      {chrome && (
        <img
          src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_32x32.png"
          width="16px"
          alt="Google Chrome"
          draggable={false}
        />
      )}
      {opera && (
        <img
          src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_32x32.png"
          width="16px"
          alt="Opera"
          draggable={false}
        />
      )}
    </div>
  );
}

BrowsersLogos.defaultProps = {
  edge: true,
  safari: true,
  firefox: true,
  chrome: true,
  opera: true,
} as Partial<IBrowsersLogosProps>;
