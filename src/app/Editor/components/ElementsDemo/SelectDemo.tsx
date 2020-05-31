import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";
import { BrowsersLogos } from "@components/BrowsersLogos";

const messages = defineMessages({
  title: {
    defaultMessage: "Select",
    id: "app.Editor.elements.select.title",
  },
  subtitle: {
    defaultMessage:
      "Common dropdown select element used to select ony one choice from a set",
    id: "app.Editor.elements.select.subtitle",
  },
});

export const SelectDemo = function () {
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
          <h5>Default</h5>
          <select id="select" name="select">
            <option selected hidden>
              Pick an option
            </option>
            <optgroup label="Option Group">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </optgroup>
          </select>
        </section>
        <section>
          <h5>Disabled</h5>
          <select id="select" name="select" disabled>
            <optgroup label="Option Group">
              <option selected>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </optgroup>
          </select>
        </section>
        <section>
          <h5>Multiple</h5>
          <select multiple size={8} id="multi-select">
            <optgroup label="Option Group">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </optgroup>
            <optgroup label="Option Group 2">
              <option>Option 4</option>
              <option>Option 5</option>
              <option>Option 6</option>
            </optgroup>
          </select>
        </section>
        <section>
          <h5>Multiple disabled</h5>
          <select multiple disabled size={8} id="multi-select">
            <optgroup label="Option Group">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </optgroup>
            <optgroup label="Option Group 2">
              <option>Option 4</option>
              <option>Option 5</option>
              <option>Option 6</option>
            </optgroup>
          </select>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
