import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";
import { BrowsersLogos } from "@components/BrowsersLogos";

const messages = defineMessages({
  title: {
    defaultMessage: "Input range",
    id: "app.Editor.elements.range.title",
  },
  subtitle: {
    defaultMessage:
      "Input element use to pick a value between a range of values",
    id: "app.Editor.elements.range.subtitle",
  },
});

export const RangeDemo = function () {
  const intl = useIntl();

  return (
    <EditorWrapper
      header={
        <EditorHeader
          title={intl.formatMessage(messages.title)}
          subtitle={
            <>
              {intl.formatMessage(messages.subtitle)}
              <BrowsersLogos />
            </>
          }
        />
      }
    >
      <PreviewFrame>
        <section>
          <h5>Resting</h5>
          <input
            type="range"
            id="range"
            name="range"
            min="0"
            max="500"
            step="10"
            defaultValue="250"
          />
        </section>
        <section>
          <h5>Disabled</h5>
          <input
            type="range"
            id="range"
            name="range"
            min="0"
            max="500"
            step="10"
            defaultValue="250"
            disabled
          />
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
