import { ComponentType } from "react";
import ButtonDemo from "./ButtonDemo";
import CheckRadioDemo from "./CheckRadioDemo";
import CodeDemo from "./CodeDemo";

const demomap = new Map<string, ComponentType>();

demomap.set("button", ButtonDemo);
demomap.set("check-radio", CheckRadioDemo);
demomap.set("code", CodeDemo);

export default demomap;
