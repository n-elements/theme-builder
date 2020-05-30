import { ComponentType } from "react";
import { ButtonDemo } from "./ButtonDemo";
import { CheckRadioDemo } from "./CheckRadioDemo";
import { CodeDemo } from "./CodeDemo";
import { DetailsDemo } from "./DetailsDemo";

const demomap = new Map<string, ComponentType>();

demomap.set("button", ButtonDemo);
demomap.set("check-radio", CheckRadioDemo);
demomap.set("code", CodeDemo);
demomap.set("details", DetailsDemo);

export default demomap;
