import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";
import { BrowsersLogos } from "@components/BrowsersLogos";

const messages = defineMessages({
  title: {
    defaultMessage: "Buttons",
    id: "app.Editor.elements.button.title",
  },
  subtitle: {
    defaultMessage:
      "Preformatted code blocks used to display code sample and indented text",
    id: "app.Editor.elements.button.subtitle",
  },
});

export const ButtonDemo = function () {
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
          <h5>Regular button</h5>
          <button type="button">Sample button</button>
        </section>

        <section>
          <h5>Disabled button</h5>
          <button type="button" disabled>
            Sample button
          </button>
        </section>

        <section>
          <h5>Button with icon</h5>
          <button type="button">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            Sample button
          </button>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
