import React from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";

const messages = defineMessages({
  title: {
    defaultMessage: "Details / Folding",
    id: "app.Editor.elements.details.title",
  },
  subtitle: {
    defaultMessage: "Folding element that can be combined to build a group",
    id: "app.Editor.elements.details.subtitle",
  },
});

export const DetailsDemo = function () {
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
          <h5>Single</h5>
          <details>
            <summary>My details title</summary>
            <div style={{ padding: "0 32px" }}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus provident saepe deserunt veritatis? Totam, corrupti.
                Dolor quos, numquam totam quae ea enim maiores sequi et? Optio
                harum adipisci neque nemo.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus provident saepe deserunt veritatis? Totam, corrupti.
                Dolor quos, numquam totam quae ea enim maiores sequi et? Optio
                harum adipisci neque nemo.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus provident saepe deserunt veritatis? Totam, corrupti.
                Dolor quos, numquam totam quae ea enim maiores sequi et? Optio
                harum adipisci neque nemo.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus provident saepe deserunt veritatis? Totam, corrupti.
                Dolor quos, numquam totam quae ea enim maiores sequi et? Optio
                harum adipisci neque nemo.
              </p>
            </div>
          </details>
        </section>
        <section>
          <h5>Group</h5>
          <div ne-details-group="true">
            <details>
              <summary>My address details</summary>
              <div style={{ padding: "0 32px" }}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus provident saepe deserunt veritatis? Totam,
                  corrupti. Dolor quos, numquam totam quae ea enim maiores sequi
                  et? Optio harum adipisci neque nemo.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus provident saepe deserunt veritatis? Totam,
                  corrupti. Dolor quos, numquam totam quae ea enim maiores sequi
                  et? Optio harum adipisci neque nemo.
                </p>
              </div>
            </details>
            <details>
              <summary>My address details</summary>
              <div style={{ padding: "0 32px" }}>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1577898485757-7c8e111a32a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                />
                <small>
                  Photo by{" "}
                  <a
                    href="https://unsplash.com/@equinusocio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mattia Astorino
                  </a>
                </small>
              </div>
            </details>
            <details>
              <summary>My details extended</summary>
              <div style={{ padding: "0 32px" }}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus provident saepe deserunt veritatis? Totam,
                  corrupti. Dolor quos, numquam totam quae ea enim maiores sequi
                  et? Optio harum adipisci neque nemo.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus provident saepe deserunt veritatis? Totam,
                  corrupti. Dolor quos, numquam totam quae ea enim maiores sequi
                  et? Optio harum adipisci neque nemo.
                </p>
              </div>
            </details>
          </div>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
