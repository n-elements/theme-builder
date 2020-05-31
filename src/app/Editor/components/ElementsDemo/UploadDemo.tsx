import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";

const messages = defineMessages({
  title: {
    defaultMessage: "Upload",
    id: "app.Editor.elements.upload.title",
  },
  subtitle: {
    defaultMessage: "HTML element to select a file from the device",
    id: "app.Editor.elements.upload.subtitle",
  },
});

export const UploadDemo = function () {
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
          <h5>Resting</h5>
          <input type="file" />
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
