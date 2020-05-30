import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";

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

export const TableDemo = function () {
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
          <h5>Default</h5>
          <table>
            <thead>
              <tr>
                <th>
                  <b>A</b>
                </th>
                <th>
                  <b>B</b>
                </th>
                <th>
                  <b>C</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Content 1</td>
                <td>Content 2</td>
                <td>Content 3</td>
              </tr>
              <tr>
                <td>Content 1</td>
                <td>Content 2</td>
                <td>Content 3</td>
              </tr>
              <tr>
                <td>Content 1</td>
                <td>Content 2</td>
                <td>Content 3</td>
              </tr>
              <tr>
                <td>Content 1</td>
                <td>Content 2</td>
                <td>Content 3</td>
              </tr>
            </tbody>
          </table>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
