import {
  VariableArray,
  IVariable,
  VariableType,
  VariableDomain,
  VariableValue,
} from "./types";
import routes from "@routes";
import { assignId } from "./helpers";

const domains = routes.editor;

function bindRelationTo(variable: IVariable, external: IVariable): IVariable {
  return {
    ...variable,
    _referenceId: external._id,
  };
}

function create(
  domain: VariableDomain,
  name: string,
  type: VariableType,
  value: VariableValue
): IVariable {
  return assignId({
    domain,
    name,
    type,
    value,
  });
}

export const accentvariable = create(
  domains.colours,
  "accent-color",
  "color",
  "hsl(220, 100%, 50%)"
);

export default function preset(): VariableArray {
  return [
    accentvariable,
    create(
      domains.document,
      "ne-global-background",
      "color",
      "hsl(0, 0%, 100%)"
    ),
    create(domains.document, "ne-global-foreground", "color", "hsl(0, 0%, 0%)"),
    create(domains.typography, "ne-root-font-size", "unit", "100%"),
    create(domains.typography, "ne-body-font-size", "unit", "1.125rem"),
    create(
      domains.document,
      "ne-selection-foreground",
      "color",
      "hsl(0, 0%, 100%)"
    ),
    create(
      domains.document,
      "ne-selection-background",
      "color",
      "hsl(233, 64%, 72%)"
    ),
    create(domains.document, "ne-outline-width", "unit-multiple", "2px"),
    bindRelationTo(
      create(domains.document, "ne-outline-color", "color", ""),
      accentvariable
    ),
    create(domains.document, "ne-line-height", "unit", "1.5"),
    create(domains.typography, "ne-headings-scale", "unit", "1.25"),
    create(domains.elements, "ne-quote-font-size", "unit", "2rem"),

    bindRelationTo(
      create(domains.elements, "ne-cite-foreground", "unit", ""),
      accentvariable
    ),
    create(domains.elements, "ne-cite-font-size", "unit", "1rem"),
    create(domains.elements, "ne-cite-start-sign", "unit", '"—"'),
    bindRelationTo(
      create(domains.elements, "ne-links-foreground", "unit", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-links-active-foreground",
      "unit",
      "hsl(233, 64%, 52%)"
    ),
    create(
      domains.elements,
      "ne-del-foreground",
      "color",
      "hsl(337, 74%, 31%)"
    ),
    create(domains.elements, "ne-del-background", "color", "hsl(0, 100%, 94%)"),
    create(
      domains.elements,
      "ne-ins-foreground",
      "color",
      "hsl(161, 98%, 18%)"
    ),
    create(
      domains.elements,
      "ne-ins-background",
      "color",
      "hsl(138, 100%, 88%)"
    ),
    create(domains.elements, "ne-kbd-color", "color", "hsl(233, 34%, 96%)"),
    create(domains.elements, "ne-kbd-border-radius", "unit-multiple", "4px"),
    create(
      domains.elements,
      "ne-mark-foreground",
      "color",
      "hsl(20, 100%, 26%)"
    ),
    create(
      domains.elements,
      "ne-mark-background",
      "color",
      "hsl(57, 100%, 60%)"
    ),
    create(
      domains.elements,
      "ne-inline-code-border-radius",
      "unit-multiple",
      "2px"
    ),
    create(
      domains.elements,
      "ne-inline-code-background",
      "color",
      "hsl(220, 10%, 95%)"
    ),
    create(domains.elements, "ne-button-border", "border", "0"),
    create(domains.elements, "ne-button-hover-border", "border", "0"),
    create(domains.elements, "ne-button-active-border", "border", "0"),
    create(domains.elements, "ne-button-disabled-border", "border", "0"),
    bindRelationTo(
      create(domains.elements, "ne-button-background", "color", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-button-hover-background",
      "color",
      "hsl(233, 64%, 52%)"
    ),
    create(
      domains.elements,
      "ne-button-active-background",
      "color",
      "hsl(233, 64%, 32%)"
    ),
    create(
      domains.elements,
      "ne-button-disabled-background",
      "color",
      "hsl(233, 34%, 96%)"
    ),
    create(domains.elements, "ne-button-foreground", "color", "#FFF"),
    create(domains.elements, "ne-button-hover-foreground", "color", "#FFF"),
    create(domains.elements, "ne-button-active-foreground", "color", "#FFF"),
    create(
      domains.elements,
      "ne-button-disabled-foreground",
      "color",
      "hsl(233, 24%, 72%)"
    ),
    create(domains.elements, "ne-button-icon-margin", "unit-multiple", "1em"),
    create(domains.elements, "ne-button-radius", "unit-multiple", "5px"),
    create(domains.elements, "ne-button-font-weight", "unit", "700"),
    create(domains.elements, "ne-button-font-size", "unit", "inherit"),
    create(domains.elements, "ne-button-y-padding", "unit", "1em"),
    create(domains.elements, "ne-button-x-padding", "unit", "2em"),
    create(
      domains.elements,
      "ne-button-shadow",
      "box-shadow",
      "0 1px 2px rgba(0, 0, 0, 0.16)"
    ),
    create(
      domains.elements,
      "ne-checkradio-border",
      "border",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-checkradio-background",
      "color",
      "hsl(220, 10%, 95%)"
    ),
    bindRelationTo(
      create(domains.elements, "ne-checkradio-color", "color", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-checkradio-tick-color",
      "color",
      "var(--ne-global-background, #FFF)"
    ),
    create(domains.elements, "ne-checkradio-size", "unit", "18px"),
    create(
      domains.elements,
      "ne-checkradio-border-radius",
      "unit-multiple",
      "4px"
    ),
    create(
      domains.elements,
      "ne-checkradio-shadow",
      "box-shadow",
      "0 1px 1px rgba(0, 0, 0, 0.2)"
    ),
    create(
      domains.elements,
      "ne-code-border",
      "border",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(domains.elements, "ne-code-background", "color", "transparent"),
    create(
      domains.elements,
      "ne-code-foreground",
      "color",
      "hsl(220, 10%, 50%)"
    ),
    create(domains.elements, "ne-code-font-size", "unit", "0.875rem"),
    create(
      domains.elements,
      "ne-code-font-family",
      "font-family",
      '"SF Mono", Monaco, Inconsolata, "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace'
    ),
    create(domains.elements, "ne-code-border-radius", "unit-multiple", "5px"),
    create(domains.elements, "ne-code-y-padding", "unit", "1.25rem"),
    create(domains.elements, "ne-code-x-padding", "unit", "1.5rem"),
    create(domains.elements, "ne-color-border", "border", "0"),
    create(domains.elements, "ne-color-radius", "unit-multiple", "100%"),
    create(
      domains.elements,
      "ne-color-shadow",
      "box-shadow",
      "0 1px 2px rgba(0, 0, 0, 0.16)"
    ),
    create(
      domains.elements,
      "ne-details-separator",
      "border",
      "1px solid rgba(0, 0, 0, 0.05)"
    ),
    create(domains.elements, "ne-details-background", "color", "#FFF"),
    create(domains.elements, "ne-details-summary-background", "color", "#FFF"),
    create(domains.elements, "ne-details-summary-font-size", "unit", "initial"),
    create(domains.elements, "ne-details-summary-font-weight", "unit", "700"),
    bindRelationTo(
      create(domains.elements, "ne-details-summary-open-color", "color", ""),
      accentvariable
    ),
    create(domains.elements, "ne-details-max-height", "unit", "300px"),
    create(
      domains.elements,
      "ne-details-icon",
      "url",
      'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" fill="currentColor"/></svg>'
    ),
    create(domains.elements, "ne-details-icon-size", "unit", "0.75rem"),
    create(
      domains.elements,
      "ne-details-border-radius",
      "unit-multiple",
      "4px"
    ),
    create(
      domains.elements,
      "ne-details-summary-padding",
      "unit-multiple",
      "16px"
    ),
    create(
      domains.elements,
      "ne-details-shadow",
      "box-shadow",
      "0 1px 2px rgba(0, 0, 0, 0.16)"
    ),
    create(domains.elements, "ne-dialog-border", "border", "0"),
    create(domains.elements, "ne-dialog-background", "color", "#FFF"),
    create(domains.elements, "ne-dialog-radius", "unit-multiple", "5px"),
    create(domains.elements, "ne-dialog-y-padding", "unit", "2rem"),
    create(domains.elements, "ne-dialog-x-padding", "unit", "2rem"),
    create(
      domains.elements,
      "ne-dialog-shadow",
      "box-shadow",
      "0 19px 38px 0 rgba(0, 0, 0, 0.16), 0 15px 12px 0 rgba(0, 0, 0, 0.12)"
    ),
    create(domains.elements, "ne-dialog-max-width", "unit", "40rem"),
    create(
      domains.elements,
      "ne-dialog-backdrop",
      "color",
      "rgba(0, 0, 0, 0.3)"
    ),
    create(
      domains.elements,
      "ne-dialog-backdrop-filter",
      "filter",
      "blur(10px)"
    ),
    create(domains.elements, "ne-form-legend-weight", "unit", "600"),
    create(
      domains.elements,
      "ne-form-legend-margin",
      "unit-multiple",
      "0 0 0.5rem"
    ),
    create(domains.elements, "ne-hr-background", "color", "hsl(0, 0%, 89%)"),
    create(domains.elements, "ne-hr-weight", "unit", "2px"),
    create(domains.elements, "ne-hr-margin", "unit-multiple", "50px"),
    create(
      domains.elements,
      "ne-meter-border-color",
      "color",
      "hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-meter-background",
      "color",
      "hsl(220, 10%, 95%)"
    ),
    create(domains.elements, "ne-meter-radius", "unit-multiple", "5px"),
    create(domains.elements, "ne-meter-width", "unit", "30px"),
    create(domains.elements, "ne-meter-height", "unit", "3px"),
    create(
      domains.elements,
      "ne-meter-filled-color-strong",
      "color",
      "hsl(67, 78%, 52%)"
    ),
    create(
      domains.elements,
      "ne-meter-filled-color-good",
      "color",
      "hsl(41, 100%, 60%)"
    ),
    create(
      domains.elements,
      "ne-meter-filled-color-weak",
      "color",
      "hsl(354, 100%, 65%)"
    ),
    create(
      domains.elements,
      "ne-progress-border",
      "border",
      "1px hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-progress-background",
      "color",
      "hsl(233, 34%, 96%)"
    ),
    bindRelationTo(
      create(domains.elements, "ne-progress-filled-color", "color", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-progress-stripe-colors",
      "color",
      "rgba(255, 255, 255, 0.4)"
    ),
    create(domains.elements, "ne-progress-height", "unit", "8px"),
    create(domains.elements, "ne-progress-radius", "unit-multiple", "10px"),
    create(
      domains.elements,
      "ne-range-border-color",
      "border",
      "1px hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-range-disabled-border-color",
      "border",
      "1px rgba(0, 0, 0, 0)"
    ),
    create(domains.elements, "ne-range-border-width", "unit", "1px"),
    create(
      domains.elements,
      "ne-range-background",
      "color",
      "hsl(220, 10%, 95%)"
    ),
    create(
      domains.elements,
      "ne-range-disabled-background",
      "color",
      "hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-range-focus-background",
      "color",
      "var(--ne-range-background, hsl(220, 10%, 95%))"
    ),
    create(
      domains.elements,
      "ne-range-thumb-stripes-color",
      "color",
      "var(--ne-global-background, #fff)"
    ),
    create(
      domains.elements,
      "ne-range-thumb-stripes-active-color",
      "color",
      "var(--ne-range-thumb-stripes-color, #fff)"
    ),
    bindRelationTo(
      create(domains.elements, "ne-range-thumb-background", "color", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-range-thumb-active-background",
      "color",
      "var(--ne-range-thumb-background, var(--accent-color))"
    ),
    create(
      domains.elements,
      "ne-range-thumb-disabled-background",
      "color",
      "hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-range-thumb-shadow",
      "box-shadow",
      "0 1px 2px 0 rgba(0, 0, 0, 0.16)"
    ),
    create(domains.elements, "ne-range-thumb-width", "unit", "28px"),
    create(domains.elements, "ne-range-thumb-height", "unit", "30px"),
    create(domains.elements, "ne-range-thumb-radius", "unit", "5px"),
    create(domains.elements, "ne-range-width", "unit", "100%"),
    create(domains.elements, "ne-range-height", "unit", "5px"),
    create(domains.elements, "ne-range-radius", "unit", "10px"),
    create(
      domains.elements,
      "ne-select-border",
      "border",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-select-hover-border",
      "border",
      "var(--ne-select-border, 1px solid hsl(0, 0%, 89%))"
    ),
    create(
      domains.elements,
      "ne-select-focus-border",
      "border",
      "var(--ne-select-border, 1px solid var(--accent-color))"
    ),
    create(
      domains.elements,
      "ne-select-disabled-border",
      "border",
      "1px solid hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-select-background",
      "color",
      "var(--ne-global-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-select-hover-background",
      "color",
      "var(--ne-select-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-select-focus-background",
      "color",
      "var(--ne-select-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-select-disabled-background",
      "color",
      "hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-select-option-checked-background",
      "color",
      "var(--accent-color)"
    ),
    create(
      domains.elements,
      "ne-select-foreground",
      "color",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-select-hover-foreground",
      "color",
      "var(--ne-select-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-select-focus-foreground",
      "color",
      "var(--ne-select-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-select-disabled-foreground",
      "color",
      "hsl(233, 14%, 72%)"
    ),
    create(
      domains.elements,
      "ne-select-option-checked-foreground",
      "color",
      "#FFF"
    ),
    create(domains.elements, "ne-select-radius", "unit-multiple", "5px"),
    create(domains.elements, "ne-select-width", "unit", "100%"),
    create(domains.elements, "ne-select-padding", "unit", "0.5em"),
    create(
      domains.elements,
      "ne-select-icon",
      "url",
      'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 8l5-5 5 5m0 8l-5 5-5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10"/></svg>'
    ),
    create(domains.elements, "ne-select-icon-size", "unit", "1rem"),
    create(
      domains.elements,
      "ne-select-shadow",
      "box-shadow",
      "0 1px 2px rgba(0, 0, 0, 0.06)"
    ),
    create(
      domains.elements,
      "ne-table-head-separator",
      "border",
      "2px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-table-row-separator",
      "border",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-table-striped-background",
      "color",
      "transparent"
    ),
    create(domains.elements, "ne-table-background", "color", "transparent"),
    create(domains.elements, "ne-table-cells-y-padding", "unit", "16px"),
    create(domains.elements, "ne-table-cells-x-padding", "unit", "16px"),
    create(
      domains.elements,
      "ne-textfield-border",
      "border",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-textfield-hover-border",
      "border",
      "var(--ne-textfield-border, 1px solid hsl(0, 0%, 89%))"
    ),
    create(
      domains.elements,
      "ne-textfield-focus-border",
      "border",
      "var(--ne-textfield-border, 1px solid hsl(0, 0%, 89%))"
    ),
    create(
      domains.elements,
      "ne-textfield-disabled-border",
      "border",
      "1px solid hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-textfield-readonly-border",
      "border",
      "1px dashed hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-textfield-readonly-focus-border",
      "border",
      "1px dashed var(--accent-color)"
    ),
    create(
      domains.elements,
      "ne-textfield-invaild-border-color",
      "color",
      "hsl(354, 100%, 65%)"
    ),
    create(domains.elements, "ne-textfield-background", "color", "#FFF"),
    create(
      domains.elements,
      "ne-textfield-hover-background",
      "color",
      "var(--ne-textfield-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-textfield-focus-background",
      "color",
      "var(--ne-textfield-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-textfield-disabled-background",
      "color",
      "hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-textfield-invalid-background",
      "color",
      "#FFF"
    ),
    create(
      domains.elements,
      "ne-textfield-foreground",
      "color",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-hover-foreground",
      "color",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-focus-foreground",
      "color",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-disabled-foreground",
      "color",
      "hsl(233, 24%, 72%)"
    ),
    create(
      domains.elements,
      "ne-textfield-readonly-foreground",
      "color",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-valid-foreground",
      "color",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-placeholder-foreground",
      "color",
      "hsl(0, 0%, 60%)"
    ),
    create(
      domains.elements,
      "ne-textfield-hover-placeholder-foreground",
      "color",
      "hsl(0, 0%, 60%)"
    ),
    create(
      domains.elements,
      "ne-textfield-focus-placeholder-foreground",
      "color",
      "hsl(0, 0%, 60%)"
    ),
    create(
      domains.elements,
      "ne-textfield-disabled-placeholder-foreground",
      "color",
      "hsl(233, 34%, 80%)"
    ),
    create(domains.elements, "ne-textfield-radius", "unit-multiple", "5px"),
    create(domains.elements, "ne-textfield-width", "unit", "100%"),
    create(domains.elements, "ne-textfield-min-height", "unit", "48px"),
    create(domains.elements, "ne-textfield-y-padding", "unit", "0.5em"),
    create(domains.elements, "ne-textfield-x-padding", "unit", "1em"),
    create(
      domains.elements,
      "ne-textfield-selection-background",
      "color",
      "hsl(233, 64%, 90%)"
    ),
    create(
      domains.elements,
      "ne-textfield-selection-foreground",
      "color",
      "hsl(0, 0%, 13%)"
    ),
    create(
      domains.elements,
      "ne-textfield-resize",
      "textfield-resize",
      "vertical"
    ),
    create(domains.elements, "ne-textfield-font-weight", "unit", "700"),
    create(domains.elements, "ne-upload-label-weight", "unit", "700"),
    create(domains.elements, "ne-upload-label-font-size", "unit", "1.2rem"),
  ];
}
