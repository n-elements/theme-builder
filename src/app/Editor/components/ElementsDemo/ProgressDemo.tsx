import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";

const messages = defineMessages({
  title: {
    defaultMessage: "Progress",
    id: "app.Editor.elements.progress.title",
  },
  subtitle: {
    defaultMessage:
      "The progress bar element is used as loading indicator or overall progress status",
    id: "app.Editor.elements.progress.subtitle",
  },
});

export const ProgressDemo = function () {
  const intl = useIntl();

  return (
    <EditorWrapper
      header={
        <EditorHeader
          title={intl.formatMessage(messages.title)}
          subtitle={intl.formatMessage(messages.subtitle)}
        />
      }
    >
      <PreviewFrame>
        <section>
          <h5>With value</h5>
          <progress value="50" max="100"></progress>
        </section>
        <section>
          <h5>Indeterminate</h5>
          <progress max="100"></progress>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
