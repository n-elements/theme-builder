import React, { useRef } from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";
import { BrowsersLogos } from "@components/BrowsersLogos";

const messages = defineMessages({
  title: {
    defaultMessage: "Dialog",
    id: "app.Editor.elements.dialog.title",
  },
  subtitle: {
    defaultMessage: "Element to display a modal dialog",
    id: "app.Editor.elements.dialog.subtitle",
  },
});

export const DialogDemo = function () {
  const intl = useIntl();
  const dialogRef = useRef(null) as any;

  const openDialog = () => {
    let modal = dialogRef.current;
    typeof HTMLDialogElement === "function"
      ? modal.showModal()
      : alert("Your browser doesn't support this element yet");
  };

  const closeDialog = () => {
    let modal = dialogRef.current;
    typeof HTMLDialogElement === "function"
      ? modal.close()
      : alert("Your browser doesn't support this element yet");
  };

  return (
    <EditorWrapper
      header={
        <EditorHeader
          title={intl.formatMessage(messages.title)}
          subtitle={
            <>
              {intl.formatMessage(messages.subtitle)}
              <BrowsersLogos safari={false} firefox={false} />
            </>
          }
        />
      }
    >
      <PreviewFrame>
        <section>
          <button onClick={openDialog}>Open dialog</button>
          <dialog ref={dialogRef}>
            <header>
              <h3>Dialog Header</h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              minus aut laborum eum, obcaecati odit accusantium enim tempore,
              nam suscipit cumque repellendus at. Repellendus molestias ea
              labore error iste dicta.
            </p>
            <footer>
              <button type="button" onClick={closeDialog}>
                Yeah, confirm
              </button>
            </footer>
          </dialog>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
