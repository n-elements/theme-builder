import React from "react";
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
    defaultMessage:
      "HTML Elements: <input type='checkbox'> | <input type='radio'>",
    id: "app.Editor.elements.checkradio.subtitle",
  },
});

export const CheckRadioDemo = function () {
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
          <h5>Checkboxes</h5>
          <fieldset>
            <legend>Fieldset legend</legend>
            <label>
              <input type="checkbox" />
              Default
            </label>
            <br />
            <label>
              <input defaultChecked type="checkbox" />
              Checked
            </label>
            <br />
            <label>
              <input data-indeterminate type="checkbox" />
              Indeterminate
            </label>
            <br />
            <label>
              <input type="checkbox" disabled />
              disabled
            </label>
          </fieldset>
        </section>
        <section>
          <section>
            <h5>Radios</h5>
            <fieldset>
              <legend>Fieldset legend</legend>
              <label>
                <input name="group" type="radio" />
                Default
              </label>
              <br />
              <label>
                <input defaultChecked name="group" type="radio" />
                Checked
              </label>
              <br />
              <label>
                <input name="group" disabled type="radio" />
                Disabled
              </label>
            </fieldset>
          </section>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
