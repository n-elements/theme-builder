import React, { useState } from "react";
import classes from "./ThemeActions.module.css";
import clsx from "clsx";
import { Button } from "@components/Button";
import { Undo } from "@components/Icons/16x";
import useThemeReset from "@hooks/useThemeReset";
import { defineMessages, useIntl } from "react-intl";
import Modal from "react-modal";
import useCSSExport from "@app/Editor/hooks/useCSSExport";
import { PreviewFrame } from "@components/PreviewFrame";
import PreviewTheme from "../PreviewTheme";

const messages = defineMessages({
  downloadTheme: {
    defaultMessage: "Download",
    id: "app.Editor.components.ThemeActions.downloadTheme",
  },
  previewTheme: {
    defaultMessage: "Preview and download",
    id: "app.Editor.components.ThemeActions.previewTheme",
  },
  reset: {
    defaultMessage: "Reset",
    id: "app.Editor.components.ThemeActions.reset",
  },
  close: {
    defaultMessage: "Close",
    id: "app.Editor.components.ThemeActions.close",
  },
});

export interface IThemeActionsProps extends PropsClass {}

export const ThemeActions = function ({
  className,
  ...attributes
}: IThemeActionsProps) {
  const intl = useIntl();
  const exported = useCSSExport();
  const handleReset = useThemeReset();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={clsx(classes.ThemeActions, className)} {...attributes}>
      <Button onClick={handleReset} secondary>
        <Undo />
        {intl.formatMessage(messages.reset)}
      </Button>
      <Button onClick={openModal}>
        {intl.formatMessage(messages.previewTheme)}
      </Button>

      <Modal isOpen={modalIsOpen} contentLabel="Example Modal">
        <header>
          <Button onClick={closeModal} secondary>
            {intl.formatMessage(messages.close)}
          </Button>
          <Button onClick={exported.download}>
            {intl.formatMessage(messages.downloadTheme)}
          </Button>
        </header>
        <PreviewFrame>
          <PreviewTheme />
        </PreviewFrame>
      </Modal>
    </div>
  );
};
