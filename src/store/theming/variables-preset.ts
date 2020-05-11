import {
  VariableArray,
  IVariable,
  VariableType,
  VariableDomain,
  VariableValue,
} from "./types";
import routes from "@routes";

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
  return {
    domain,
    name,
    type,
    value,
  };
}

export default function preset(): VariableArray {
  const accentvariable = create(
    domains.colours,
    "accent-color",
    "color",
    "hsl(220, 100%, 50%)"
  );

  return [
    create(domains.colours, "ne-global-background", "color", "#fff"),
    create(domains.colours, "ne-global-foreground", "color", "#000"),
    create(domains.typography, "ne-root-font-size", "unit", "100%"),
    create(domains.typography, "ne-body-font-size", "unit", "1.125rem"),
    create(domains.colours, "ne-selection-foreground", "color", "#fff"),
    create(
      domains.colours,
      "ne-selection-background",
      "color",
      "hsl(233, 64%, 72%)"
    ),
    create(domains.document, "ne-outline-width", "unit", "2px"),
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
    create(domains.elements, "ne-del-foreground", "unit", "hsl(337, 74%, 31%)"),
    create(domains.elements, "ne-del-background", "unit", "hsl(0, 100%, 94%)"),
    create(domains.elements, "ne-ins-foreground", "unit", "hsl(161, 98%, 18%)"),
    create(
      domains.elements,
      "ne-ins-background",
      "unit",
      "hsl(138, 100%, 88%)"
    ),
    create(domains.elements, "ne-kbd-color", "unit", "hsl(233, 34%, 96%)"),
    create(domains.elements, "ne-kbd-border-radius", "unit", "4px"),
    create(
      domains.elements,
      "ne-mark-foreground",
      "unit",
      "hsl(20, 100%, 26%)"
    ),
    create(
      domains.elements,
      "ne-mark-background",
      "unit",
      "hsl(57, 100%, 60%)"
    ),
    create(domains.elements, "ne-inline-code-border-radius", "unit", "2px"),
    create(
      domains.elements,
      "ne-inline-code-background",
      "unit",
      "hsl(220, 10%, 95%)"
    ),
    create(domains.elements, "ne-button-border", "unit", "0"),
    create(domains.elements, "ne-button-hover-border", "unit", "0"),
    create(domains.elements, "ne-button-active-border", "unit", "0"),
    create(domains.elements, "ne-button-disabled-border", "unit", "0"),
    bindRelationTo(
      create(domains.elements, "ne-button-background", "unit", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-button-hover-background",
      "unit",
      "hsl(233, 64%, 52%)"
    ),
    create(
      domains.elements,
      "ne-button-active-background",
      "unit",
      "hsl(233, 64%, 32%)"
    ),
    create(
      domains.elements,
      "ne-button-disabled-background",
      "unit",
      "hsl(233, 34%, 96%)"
    ),
    create(domains.elements, "ne-button-foreground", "unit", "#FFF"),
    create(domains.elements, "ne-button-hover-foreground", "unit", "#FFF"),
    create(domains.elements, "ne-button-active-foreground", "unit", "#FFF"),
    create(
      domains.elements,
      "ne-button-disabled-foreground",
      "unit",
      "hsl(233, 24%, 72%)"
    ),
    create(domains.elements, "ne-button-icon-margin", "unit", "1em"),
    create(domains.elements, "ne-button-radius", "unit", "5px"),
    create(domains.elements, "ne-button-font-weight", "unit", "700"),
    create(domains.elements, "ne-button-font-size", "unit", "inherit"),
    create(domains.elements, "ne-button-y-padding", "unit", "1em"),
    create(domains.elements, "ne-button-x-padding", "unit", "2em"),
    create(
      domains.elements,
      "ne-button-shadow",
      "unit",
      "0 1px 2px rgba(0, 0, 0, 0.16)"
    ),
    create(
      domains.elements,
      "ne-checkradio-border",
      "unit",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-checkradio-background",
      "unit",
      "hsl(220, 10%, 95%)"
    ),
    bindRelationTo(
      create(domains.elements, "ne-checkradio-color", "unit", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-checkradio-tick-color",
      "unit",
      "var(--ne-global-background, #FFF)"
    ),
    create(domains.elements, "ne-checkradio-size", "unit", "18px"),
    create(domains.elements, "ne-checkradio-border-radius", "unit", "4px"),
    create(
      domains.elements,
      "ne-checkradio-shadow",
      "unit",
      "0 1px 1px rgba(0, 0, 0, 0.2)"
    ),
    create(
      domains.elements,
      "ne-code-border",
      "unit",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(domains.elements, "ne-code-background", "unit", "transparent"),
    create(
      domains.elements,
      "ne-code-foreground",
      "unit",
      "hsl(220, 10%, 50%)"
    ),
    create(domains.elements, "ne-code-font-size", "unit", "0.875rem"),
    create(
      domains.elements,
      "ne-code-font-family",
      "unit",
      '"SF Mono", Monaco, Inconsolata, "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace'
    ),
    create(domains.elements, "ne-code-border-radius", "unit", "5px"),
    create(domains.elements, "ne-code-y-padding", "unit", "1.25rem"),
    create(domains.elements, "ne-code-x-padding", "unit", "1.5rem"),
    create(domains.elements, "ne-color-border", "unit", "0"),
    create(domains.elements, "ne-color-radius", "unit", "100%"),
    create(
      domains.elements,
      "ne-color-shadow",
      "unit",
      "0 1px 2px rgba(0, 0, 0, 0.16)"
    ),
    create(
      domains.elements,
      "ne-details-separator",
      "unit",
      "1px solid rgba(0, 0, 0, 0.05)"
    ),
    create(domains.elements, "ne-details-background", "unit", "#FFF"),
    create(domains.elements, "ne-details-summary-background", "unit", "#FFF"),
    create(domains.elements, "ne-details-summary-font-size", "unit", "initial"),
    create(domains.elements, "ne-details-summary-font-weight", "unit", "700"),
    bindRelationTo(
      create(domains.elements, "ne-details-summary-open-color", "unit", ""),
      accentvariable
    ),
    create(domains.elements, "ne-details-max-height", "unit", "300px"),
    create(
      domains.elements,
      "ne-details-icon",
      "unit",
      'url(data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" fill="currentColor"/></svg>)'
    ),
    create(domains.elements, "ne-details-icon-size", "unit", "0.75rem"),
    create(domains.elements, "ne-details-border-radius", "unit", "4px"),
    create(domains.elements, "ne-details-summary-padding", "unit", "16px"),
    create(
      domains.elements,
      "ne-details-shadow",
      "unit",
      "0 1px 2px rgba(0, 0, 0, 0.16)"
    ),
    create(domains.elements, "ne-dialog-border", "unit", "0"),
    create(domains.elements, "ne-dialog-background", "unit", "#FFF"),
    create(domains.elements, "ne-dialog-radius", "unit", "5px"),
    create(domains.elements, "ne-dialog-y-padding", "unit", "2rem"),
    create(domains.elements, "ne-dialog-x-padding", "unit", "2rem"),
    create(
      domains.elements,
      "ne-dialog-shadow",
      "unit",
      "0 19px 38px 0 rgba(0, 0, 0, 0.16), 0 15px 12px 0 rgba(0, 0, 0, 0.12)"
    ),
    create(domains.elements, "ne-dialog-max-width", "unit", "40rem"),
    create(
      domains.elements,
      "ne-dialog-backdrop",
      "unit",
      "rgba(0, 0, 0, 0.3)"
    ),
    create(domains.elements, "ne-dialog-backdrop-filter", "unit", "blur(10px)"),
    create(domains.elements, "ne-form-legend-weight", "unit", "600"),
    create(domains.elements, "ne-form-legend-margin", "unit", "0 0 0.5rem"),
    create(domains.elements, "ne-hr-background", "unit", "hsl(0, 0%, 89%)"),
    create(domains.elements, "ne-hr-weight", "unit", "2px"),
    create(domains.elements, "ne-hr-margin", "unit", "50px"),
    create(
      domains.elements,
      "ne-meter-border-color",
      "unit",
      "hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-meter-background",
      "unit",
      "hsl(220, 10%, 95%)"
    ),
    create(domains.elements, "ne-meter-radius", "unit", "5px"),
    create(domains.elements, "ne-meter-width", "unit", "30px"),
    create(domains.elements, "ne-meter-height", "unit", "3px"),
    create(
      domains.elements,
      "ne-meter-filled-color-strong",
      "unit",
      "hsl(67, 78%, 52%)"
    ),
    create(
      domains.elements,
      "ne-meter-filled-color-good",
      "unit",
      "hsl(41, 100%, 60%)"
    ),
    create(
      domains.elements,
      "ne-meter-filled-color-weak",
      "unit",
      "hsl(354, 100%, 65%)"
    ),
    create(
      domains.elements,
      "ne-progress-border",
      "unit",
      "1px hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-progress-background",
      "unit",
      "hsl(233, 34%, 96%)"
    ),
    bindRelationTo(
      create(domains.elements, "ne-progress-filled-color", "unit", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-progress-stripe-colors",
      "unit",
      "rgba(255, 255, 255, 0.4)"
    ),
    create(domains.elements, "ne-progress-height", "unit", "8px"),
    create(domains.elements, "ne-progress-radius", "unit", "10px"),
    create(
      domains.elements,
      "ne-range-border-color",
      "unit",
      "1px hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-range-disabled-border-color",
      "unit",
      "1px rgba(0, 0, 0, 0)"
    ),
    create(domains.elements, "ne-range-border-width", "unit", "1px"),
    create(
      domains.elements,
      "ne-range-background",
      "unit",
      "hsl(220, 10%, 95%)"
    ),
    create(
      domains.elements,
      "ne-range-disabled-background",
      "unit",
      "hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-range-focus-background",
      "unit",
      "var(--ne-range-background, hsl(220, 10%, 95%))"
    ),
    create(
      domains.elements,
      "ne-range-thumb-stripes-color",
      "unit",
      "var(--ne-global-background, #fff)"
    ),
    create(
      domains.elements,
      "ne-range-thumb-stripes-active-color",
      "unit",
      "var(--ne-range-thumb-stripes-color, #fff)"
    ),
    bindRelationTo(
      create(domains.elements, "ne-range-thumb-background", "unit", ""),
      accentvariable
    ),
    create(
      domains.elements,
      "ne-range-thumb-active-background",
      "unit",
      "var(--ne-range-thumb-background, var(--accent-color))"
    ),
    create(
      domains.elements,
      "ne-range-thumb-disabled-background",
      "unit",
      "hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-range-thumb-shadow",
      "unit",
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
      "unit",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-select-hover-border",
      "unit",
      "var(--ne-select-border, 1px solid hsl(0, 0%, 89%))"
    ),
    create(
      domains.elements,
      "ne-select-focus-border",
      "unit",
      "var(--ne-select-border, 1px solid var(--accent-color))"
    ),
    create(
      domains.elements,
      "ne-select-disabled-border",
      "unit",
      "1px solid hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-select-background",
      "unit",
      "var(--ne-global-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-select-hover-background",
      "unit",
      "var(--ne-select-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-select-focus-background",
      "unit",
      "var(--ne-select-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-select-disabled-background",
      "unit",
      "hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-select-option-checked-background",
      "unit",
      "var(--accent-color)"
    ),
    create(
      domains.elements,
      "ne-select-foreground",
      "unit",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-select-hover-foreground",
      "unit",
      "var(--ne-select-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-select-focus-foreground",
      "unit",
      "var(--ne-select-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-select-disabled-foreground",
      "unit",
      "hsl(233, 14%, 72%)"
    ),
    create(
      domains.elements,
      "ne-select-option-checked-foreground",
      "unit",
      "#FFF"
    ),
    create(domains.elements, "ne-select-radius", "unit", "5px"),
    create(domains.elements, "ne-select-width", "unit", "100%"),
    create(domains.elements, "ne-select-padding", "unit", "0.5em"),
    create(
      domains.elements,
      "ne-select-icon",
      "unit",
      'url(data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 8l5-5 5 5m0 8l-5 5-5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10"/></svg>)'
    ),
    create(domains.elements, "ne-select-icon-size", "unit", "1rem"),
    create(
      domains.elements,
      "ne-select-shadow",
      "unit",
      "0 1px 2px rgba(0, 0, 0, 0.06)"
    ),
    create(
      domains.elements,
      "ne-table-head-separator",
      "unit",
      "2px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-table-row-separator",
      "unit",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-table-striped-background",
      "unit",
      "transparent"
    ),
    create(domains.elements, "ne-table-background", "unit", "transparent"),
    create(domains.elements, "ne-table-cells-y-padding", "unit", "16px"),
    create(domains.elements, "ne-table-cells-x-padding", "unit", "16px"),
    create(
      domains.elements,
      "ne-textfield-border",
      "unit",
      "1px solid hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-textfield-hover-border",
      "unit",
      "var(--ne-textfield-border, 1px solid hsl(0, 0%, 89%))"
    ),
    create(
      domains.elements,
      "ne-textfield-focus-border",
      "unit",
      "var(--ne-textfield-border, 1px solid hsl(0, 0%, 89%))"
    ),
    create(
      domains.elements,
      "ne-textfield-disabled-border",
      "unit",
      "1px solid hsl(233, 34%, 96%)"
    ),
    create(
      domains.elements,
      "ne-textfield-readonly-border",
      "unit",
      "1px dashed hsl(0, 0%, 89%)"
    ),
    create(
      domains.elements,
      "ne-textfield-readonly-focus-border",
      "unit",
      "1px dashed var(--accent-color)"
    ),
    create(
      domains.elements,
      "ne-textfield-invaild-border-color",
      "unit",
      "hsl(354, 100%, 65%)"
    ),
    create(domains.elements, "ne-textfield-background", "unit", "#FFF"),
    create(
      domains.elements,
      "ne-textfield-hover-background",
      "unit",
      "var(--ne-textfield-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-textfield-focus-background",
      "unit",
      "var(--ne-textfield-background, #FFF)"
    ),
    create(
      domains.elements,
      "ne-textfield-disabled-background",
      "unit",
      "hsl(233, 34%, 96%)"
    ),
    create(domains.elements, "ne-textfield-invalid-background", "unit", "#FFF"),
    create(
      domains.elements,
      "ne-textfield-foreground",
      "unit",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-hover-foreground",
      "unit",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-focus-foreground",
      "unit",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-disabled-foreground",
      "unit",
      "hsl(233, 24%, 72%)"
    ),
    create(
      domains.elements,
      "ne-textfield-readonly-foreground",
      "unit",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-valid-foreground",
      "unit",
      "var(--ne-global-foreground, hsl(0, 0%, 13%))"
    ),
    create(
      domains.elements,
      "ne-textfield-placeholder-foreground",
      "unit",
      "hsl(0, 0%, 60%)"
    ),
    create(
      domains.elements,
      "ne-textfield-hover-placeholder-foreground",
      "unit",
      "hsl(0, 0%, 60%)"
    ),
    create(
      domains.elements,
      "ne-textfield-focus-placeholder-foreground",
      "unit",
      "hsl(0, 0%, 60%)"
    ),
    create(
      domains.elements,
      "ne-textfield-disabled-placeholder-foreground",
      "unit",
      "hsl(233, 34%, 80%)"
    ),
    create(domains.elements, "ne-textfield-radius", "unit", "5px"),
    create(domains.elements, "ne-textfield-width", "unit", "100%"),
    create(domains.elements, "ne-textfield-min-height", "unit", "48px"),
    create(domains.elements, "ne-textfield-y-padding", "unit", "0.5em"),
    create(domains.elements, "ne-textfield-x-padding", "unit", "1em"),
    create(
      domains.elements,
      "ne-textfield-selection-background",
      "unit",
      "hsl(233, 64%, 90%)"
    ),
    create(
      domains.elements,
      "ne-textfield-selection-foreground",
      "unit",
      "hsl(0, 0%, 13%)"
    ),
    create(domains.elements, "ne-textfield-resize", "unit", "vertical"),
    create(domains.elements, "ne-textfield-font-weight", "unit", "700"),
    create(domains.elements, "ne-upload-label-weight", "unit", "700"),
    create(domains.elements, "ne-upload-label-font-size", "unit", "1.2rem"),
  ];
}
