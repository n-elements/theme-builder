import useCSSExport from "@app/Editor/hooks/useCSSExport";
import { Button } from "@components/Button";
import { Undo } from "@components/Icons/16x";
import { PreviewFrame } from "@components/PreviewFrame";
import useThemeReset from "@hooks/useThemeReset";
import clsx from "clsx";
import React, { useState } from "react";
import { defineMessages, useIntl } from "react-intl";
import Modal from "react-modal";
import { useHistory, useLocation } from "react-router-dom";
import PreviewTheme from "../PreviewTheme";
import classes from "./ThemeActions.module.css";

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
  const location = useLocation();
  const exported = useCSSExport();
  const history = useHistory();
  const handleReset = useThemeReset();
  const [modalIsOpen, setModalIsOpen] = useState(
    location.search.includes("show-preview")
  );

  const openModal = () => {
    history.push(location.pathname + "?show-preview");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    history.push(location.pathname);
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            left: "15%",
            right: "15%",
            border: 0,
            padding: 0,
          },
        }}
      >
        <header className={classes.PreviewHeader}>
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
