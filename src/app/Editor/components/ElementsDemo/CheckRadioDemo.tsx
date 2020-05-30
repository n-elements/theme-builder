import React, { useCallback } from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";

const messages = defineMessages({
  title: {
    defaultMessage: "Check and Radio inputs",
    id: "app.Editor.elements.checkradio.title",
  },
  subtitle: {
    defaultMessage: "Checkbox and radio button elements used to select options",
    id: "app.Editor.elements.checkradio.subtitle",
  },
});

export const CheckRadioDemo = function () {
  const intl = useIntl();

  const indetSetter = useCallback((el) => {
    if (el) {
      el.indeterminate = true;
    }
  }, []);

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
          <h5>Checkboxes</h5>
          <fieldset>
            <input type="checkbox" /> <input defaultChecked type="checkbox" />{" "}
            <input
              ref={indetSetter}
              type="checkbox"
              onClick={(e) => e.preventDefault()}
            />{" "}
            <input type="checkbox" disabled />
          </fieldset>
        </section>
        <section>
          <section>
            <h5>Radios</h5>
            <fieldset>
              <input name="group" type="radio" />{" "}
              <input defaultChecked name="group" type="radio" />{" "}
              <input name="group" disabled type="radio" />
            </fieldset>
          </section>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
