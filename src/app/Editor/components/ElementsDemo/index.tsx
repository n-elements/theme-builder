import { ComponentType } from "react";
import { ButtonDemo } from "./ButtonDemo";
import { CheckRadioDemo } from "./CheckRadioDemo";
import { CodeDemo } from "./CodeDemo";
import { DetailsDemo } from "./DetailsDemo";
import { HrDemo } from "./HrDemo";
import { MeterDemo } from "./MeterDemo";
import { ProgressDemo } from "./ProgressDemo";
import { SelectDemo } from "./SelectDemo";
import { TableDemo } from "./TableDemo";
import { UploadDemo } from "./UploadDemo";

const demomap = new Map<string, ComponentType>();

demomap.set("button", ButtonDemo);
demomap.set("check-radio", CheckRadioDemo);
demomap.set("code", CodeDemo);
demomap.set("details", DetailsDemo);
demomap.set("hr", HrDemo);
demomap.set("meter", MeterDemo);
demomap.set("progress", ProgressDemo);
demomap.set("select", SelectDemo);
demomap.set("table", TableDemo);
demomap.set("upload", UploadDemo);

export default demomap;
