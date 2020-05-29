import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "@routes";
import { defineMessages, useIntl } from "react-intl";
import { EditorWrapper } from "../EditorWrapper";
import { EditorHeader } from "../EditorHeader";
import classes from "./EditorTypography.module.css";
import useCSSVariables from "@app/Editor/hooks/useCSSVariables";
import clsx from "clsx";

const messages = defineMessages({
  title: {
    defaultMessage: "Typography Settings",
    id: "app.Editor.components.EditorTypography.title",
  },
  subtitle: {
    defaultMessage: "Typography related elements configuration",
    id: "app.Editor.components.EditorTypography.subtitle",
  },
});

export const EditorTypography = function () {
  const intl = useIntl();
  const cssvariables = useCSSVariables();

  return (
    <Switch>
      <Route path={routes.editor.typography}>
        <EditorWrapper
          header={
            <EditorHeader
              title={intl.formatMessage(messages.title)}
              subtitle={intl.formatMessage(messages.subtitle)}
            />
          }
        >
          <div className={clsx(classes.Container, cssvariables)}>
            <h1>H1 Heading Title</h1>
            <h2>H2 Heading Title</h2>
            <h3>H3 Heading Title</h3>
            <h4>H4 Heading Title</h4>
            <h5>H5 Heading Title</h5>
            <h6>H6 Heading Title</h6>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, in incidunt, id quos facere hic corrupti, quia
              perferendis atque consectetur ipsum eaque quo quod explicabo.
              Aspernatur repudiandae voluptas dolore impedit? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quibusdam, in incidunt, id
              quos facere hic corrupti, quia perferendis atque consectetur ipsum
              eaque quo quod explicabo. Aspernatur repudiandae voluptas dolore
              impedit?
            </p>

            <blockquote>
              Less is more, isn't it?
              <cite>
                <strong>by Someone</strong>
              </cite>
            </blockquote>

            <p>
              {/* eslint-disable */}
              <a
                href="https://native-elements.stackblitz.io"
                target="_blank"
                rel="nofollow noopener"
              >
                This is a link with an <em>specified href</em>
              </a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a>
                This is a link without <em>href</em>
              </a>
            </p>

            <p>
              <strong>Strong</strong> is used to indicate strong importance.
            </p>
            <p>
              This text has added <em>emphasis</em>.
            </p>
            <p>
              The <b>b element</b> is stylistically different text from normal
              text, without any special importance.
            </p>
            <p>
              The <i>i element</i> is text that is offset from the normal text.
            </p>
            <p>
              The <u>u element</u> is text with an unarticulated, though
              explicitly rendered, non-textual annotation.
            </p>

            <p>
              <del>This text is deleted.</del>
            </p>
            <p>
              <ins>This text is inserted.</ins>
            </p>

            <p>
              <s>This text has a strikethrough</s>.
            </p>
            <p>
              Superscript<sup>®</sup>.
            </p>
            <p>
              Subscript for things like H<sub>2</sub>O.
            </p>
            <p>
              <small>This small text is small for fine print, etc.</small>
            </p>

            <p>
              Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
            </p>
            <p>
              <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">
                This text is a short inline quotation.
              </q>
            </p>
            <p>
              The <dfn>dfn element</dfn> indicates a definition.
            </p>
            <p>
              The <var>variable element</var>, such as <var>x</var> ={" "}
              <var>y</var>.
            </p>
            <address>
              2518 W Armitage Ave
              <br />
              Chicago IL 60647
            </address>
            <p>
              The time element:{" "}
              <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time>
            </p>
            <dl>
              <dt>Definition List Title</dt>
              <dd>This is a definition list division.</dd>
            </dl>
            <ul>
              <li>List item 01</li>
              <li>List item 02</li>
              <li>List item 03</li>
            </ul>
            <ol>
              <li>List item 01</li>
              <li>List item 02</li>
              <li>List item 03</li>
            </ol>
            <p>
              To edit settings, press <kbd>ctrl + ,</kbd> using{" "}
              <code>&lt;kbd&gt;</code> tag
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a
                href="https://native-elements.stackblitz.io"
                target="_blank"
                rel="nofollow noopener"
              >
                This is a link with <code>code</code>
              </a>
            </p>
            <p>
              <samp>This is sample output from a computer program.</samp>
            </p>
            <p>
              The <mark>mark element</mark> indicates a highlight.
            </p>
            <p>
              Sample inline <code>code</code>
            </p>
          </div>
        </EditorWrapper>
      </Route>
    </Switch>
  );
};
