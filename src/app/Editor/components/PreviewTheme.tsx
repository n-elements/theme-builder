import React, { Fragment, useRef } from "react";

export default function PreviewTheme() {
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
    <Fragment>
      <section style={{ maxWidth: "80ch" }}>
        <h1>H1 Heading Title</h1>
        <h2>H2 Heading Title</h2>
        <h3>H3 Heading Title</h3>
        <h4>H4 Heading Title</h4>
        <h5>H5 Heading Title</h5>
        <h6>H6 Heading Title</h6>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, in
          incidunt, id quos facere hic corrupti, quia perferendis atque
          consectetur ipsum eaque quo quod explicabo. Aspernatur repudiandae
          voluptas dolore impedit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam, in incidunt, id quos facere hic corrupti,
          quia perferendis atque consectetur ipsum eaque quo quod explicabo.
          Aspernatur repudiandae voluptas dolore impedit?
        </p>
      </section>

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
        The <b>b element</b> is stylistically different text from normal text,
        without any special importance.
      </p>
      <p>
        The <i>i element</i> is text that is offset from the normal text.
      </p>
      <p>
        The <u>u element</u> is text with an unarticulated, though explicitly
        rendered, non-textual annotation.
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
        The <var>variable element</var>, such as <var>x</var> = <var>y</var>.
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

      <section>
        <h5>Regular button</h5>
        <button type="button">Sample button</button>
      </section>

      <section>
        <h5>Disabled button</h5>
        <button type="button" disabled>
          Sample button
        </button>
      </section>

      <section>
        <h5>Button with icon</h5>
        <button type="button">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
          Sample button
        </button>
      </section>

      <section>
        <h5>Checkboxes</h5>
        <fieldset>
          <input type="checkbox" /> <input defaultChecked type="checkbox" />{" "}
          <input type="checkbox" onClick={(e) => e.preventDefault()} />{" "}
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
      <section style={{ maxWidth: "80ch" }}>
        <h5>Preformatted text</h5>
        <pre>
          P R E F O R M A T T E D T E X T ! " # $ % &amp; ' ( ) * + , - . / 0 1
          2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B C D E F G H I J K L M N O P Q
          R S T U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t
          u v w x y z {"{"} | {"}"} ~{" "}
        </pre>
      </section>
      <section style={{ maxWidth: "80ch" }}>
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
      <section>
        <input type="color" defaultValue="#606fdc" />{" "}
        <input type="color" defaultValue="#70e7bd" />
      </section>
      <section style={{ maxWidth: "80ch" }}>
        <h5>Details</h5>
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
      <section style={{ maxWidth: "80ch" }}>
        <h5>Details Group</h5>
        <div ne-details-group="true">
          <details>
            <summary>My address details</summary>
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
        </div>
      </section>
      <section>
        <button onClick={openDialog}>Open dialog</button>
        <dialog ref={dialogRef}>
          <header>
            <h3>Dialog Header</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            minus aut laborum eum, obcaecati odit accusantium enim tempore, nam
            suscipit cumque repellendus at. Repellendus molestias ea labore
            error iste dicta.
          </p>
          <footer>
            <button type="button" onClick={closeDialog}>
              Yeah, confirm
            </button>
          </footer>
        </dialog>
      </section>
    </Fragment>
  );
}
