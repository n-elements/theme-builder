import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";
import { BrowsersLogos } from "@components/BrowsersLogos";

const messages = defineMessages({
  title: {
    defaultMessage: "Color picker",
    id: "app.Editor.elements.color.title",
  },
  subtitle: {
    defaultMessage: "Inputs used to pick or enter a color value",
    id: "app.Editor.elements.color.subtitle",
  },
});

export const ColorDemo = function () {
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
          <input type="color" defaultValue="#606fdc" />{" "}
          <input type="color" defaultValue="#70e7bd" />
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
