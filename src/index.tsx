import { createElement } from "react";
import ReactDOM from "react-dom";
import "what-input";
import "@native-elements/core";
import "./styles/app.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";

const rootelement = document.getElementById("root");

ReactDOM.render(createElement(App), rootelement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
