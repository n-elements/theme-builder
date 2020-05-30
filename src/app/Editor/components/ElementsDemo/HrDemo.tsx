import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";

const messages = defineMessages({
  title: {
    defaultMessage: "Horizontal Rule",
    id: "app.Editor.elements.hr.title",
  },
  subtitle: {
    defaultMessage: "Horizontal Rule used as content separator",
    id: "app.Editor.elements.hr.subtitle",
  },
});

export const HrDemo = function () {
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
          <h5>Horizontal Rule</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in odit
            soluta incidunt libero a sunt tenetur, nihil provident
            reprehenderit, nam reiciendis minus possimus dolores autem eius ea
            obcaecati. Nesciunt.
          </p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in odit
            soluta incidunt libero a sunt tenetur, nihil provident
            reprehenderit, nam reiciendis minus possimus dolores autem eius ea
            obcaecati. Nesciunt.
          </p>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
