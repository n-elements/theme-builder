import classes from "./index.module.css";
import logoSrc from "./logo.svg";
import React from "react";

export default function ApplicationLogo() {
  return <img className={classes.ApplicationLogo} src={logoSrc} alt="" />;
}
