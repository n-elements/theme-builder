import React, { useCallback } from "react";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import { PreviewFrame } from "@components/PreviewFrame";

const messages = defineMessages({
  title: {
    defaultMessage: "Elements",
    id: "app.Editor.components.ElementsDemo.title",
  },
  subtitle: {
    defaultMessage: "Preformatted code block",
    id: "app.Editor.elements.code.subtitle",
  },
});

export const CodeDemo = function () {
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
          <h5>Preformatted text</h5>
          <pre>
            P R E F O R M A T T E D T E X T ! " # $ % &amp; ' ( ) * + , - . / 0
            1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B C D E F G H I J K L M N O
            P Q R S T U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l m n o p q
            r s t u v w x y z {"{"} | {"}"} ~{" "}
          </pre>
        </section>
        <section>
          <section>
            <h5>Preformatted code block</h5>
            <pre>
              <code>
                ReactDOM.render( &lt;h1&gt;Hello, world!&lt;/h1&gt;,
                document.getElementById('root') );
              </code>
            </pre>
          </section>
        </section>
      </PreviewFrame>
    </EditorWrapper>
  );
};
