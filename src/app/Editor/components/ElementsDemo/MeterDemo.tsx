import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";

const messages = defineMessages({
  title: {
    defaultMessage: "Meter",
    id: "app.Editor.elements.meter.title",
  },
  subtitle: {
    defaultMessage:
      "Element used to provide a visual feedback about password strength",
    id: "app.Editor.elements.meter.subtitle",
  },
});

export const MeterDemo = function () {
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
          <h5>Low</h5>
          <meter
            min="0"
            max="100"
            low={25}
            high={75}
            optimum={100}
            value="10"
          ></meter>
        </section>
        <section>
          <h5>High</h5>
          <meter
            min="0"
            max="100"
            low={25}
            high={75}
            optimum={100}
            value="50"
          ></meter>
        </section>
        <section>
          <h5>Optimum</h5>
          <meter
            min="0"
            max="100"
            low={25}
            high={75}
            optimum={100}
            value="80"
          ></meter>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
