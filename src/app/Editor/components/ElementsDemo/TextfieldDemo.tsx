import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";
import { BrowsersLogos } from "@components/BrowsersLogos";

const messages = defineMessages({
  title: {
    defaultMessage: "Texfields and Textareas",
    id: "app.Editor.elements.textfield.title",
  },
  subtitle: {
    defaultMessage: "Editable elements in which enter data",
    id: "app.Editor.elements.textfield.subtitle",
  },
});

export const TextfieldDemo = function () {
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
          <p>
            <input type="text" placeholder="Text" />
          </p>
          <p>
            <input type="text" disabled placeholder="Text" />
          </p>
          <p>
            <input
              type="text"
              readOnly
              value="I'm readonly"
              placeholder="Readonly text"
            />
          </p>
          <p>
            <input type="password" placeholder="Password" />
          </p>
          <p>
            <input type="url" placeholder="Url" />
          </p>
          <p>
            <input type="email" placeholder="Email" />
          </p>
          <p>
            <input type="tel" placeholder="Phone" />
          </p>
          <p>
            <input type="search" placeholder="Search" />
          </p>
          <p>
            <input type="number" required placeholder="Number" />
          </p>
          <p>
            <input type="date" required placeholder="Date" />
          </p>
          <p>
            <input type="time" placeholder="Time" />
          </p>
          <p>
            <input type="month" placeholder="Month" />
          </p>
          <p>
            <input type="week" placeholder="Week" />
          </p>
          <p>
            <input type="datetime-local" placeholder="Datetime Local" />
          </p>
          <p>
            <textarea></textarea>
          </p>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
