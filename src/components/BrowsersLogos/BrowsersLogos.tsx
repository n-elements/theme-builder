import React from "react";
import classes from "./BrowsersLogos.module.css";
import clsx from "clsx";
import { useIntl, defineMessages } from "react-intl";

export interface IBrowsersLogosProps extends PropsClass {
  inline?: boolean;
  edge?: boolean;
  safari?: boolean;
  firefox?: boolean;
  chrome?: boolean;
  opera?: boolean;
  showLabel?: boolean;
}

const messages = defineMessages({
  supportedBy: {
    defaultMessage: "Supported by:",
    id: "components.BrowsersLogos.supportedBy",
  },
});

export function BrowsersLogos({
  className,
  inline,
  edge,
  safari,
  firefox,
  chrome,
  opera,
  showLabel,
  ...attributes
}: IBrowsersLogosProps) {
  const intl = useIntl();

  return (
    <span
      className={clsx(classes.BrowsersLogos, className)}
      data-inline={inline}
      {...attributes}
    >
      {showLabel && (
        <small>
          <strong>{intl.formatMessage(messages.supportedBy)}</strong>
        </small>
      )}
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
    </span>
  );
}

BrowsersLogos.defaultProps = {
  edge: true,
  safari: true,
  firefox: true,
  chrome: true,
  opera: true,
  showLabel: true,
} as Partial<IBrowsersLogosProps>;
