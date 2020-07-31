import { IVariable, VariableType } from "@store/theming/types";
import Color from "color";
import { TryCatch } from "tiinvo";
import {
  OnBreakReferenceHandler,
  OnChangeHandler,
  OnChangeRelationHandler,
} from "../types/fields";
import useVariableEditing from "./useVariableEditing";

export interface IUseCSSBorderReturnValue {
  generatepseudovariables(): Record<keyof IBorder, IVariable>;
  createOnBreakrelation: (pseudovariable: IVariable) => OnBreakReferenceHandler;
  createOnChange: (pseudovariable: IVariable) => OnChangeHandler;
  createOnChangeRelation: (
    pseudovariable: IVariable
  ) => OnChangeRelationHandler;
}

export interface IBorder {
  size: string;
  style: string;
  color: string;
}

export type PseudoVariables = Record<keyof IBorder, IVariable>;

const createborder = (chunks: string[]): IBorder => ({
  color: chunks[2],
  size: chunks[0],
  style: chunks[1],
});
const generatepseudovariable = (
  variable: IVariable,
  name: string,
  type: VariableType,
  value: any
): IVariable => ({
  domain: variable.domain,
  name: variable.name + "__" + name,
  type,
  element: variable.element,
  value,
});
const ensurecolor = (maybecolor: string, fallback: string) =>
  TryCatch(Color, maybecolor).mapOrElse(
    () => fallback,
    () => maybecolor
  );
const mergeborder = (
  size: string = "",
  style: string = "",
  color: string = ""
) => [size, style, color].join(" ");

const splitToParts = (bordervalue: string): string[] => bordervalue.split(" ");

function choosefallback(
  pseudovariable: IVariable,
  size: string,
  style: string,
  color: string
): string {
  switch (pseudovariable.type) {
    case "color":
      return color;
    case "text":
      return style;
    case "unit":
      return size;
  }

  return "";
}

function updateborder(
  pseudovariable: IVariable,
  pseudovariables: PseudoVariables,
  value: string
) {
  switch (pseudovariable.type) {
    case "color":
      return mergeborder(
        pseudovariables.size.value,
        pseudovariables.style.value,
        value
      );
    case "text":
      return mergeborder(
        pseudovariables.size.value,
        value,
        pseudovariables.color.value
      );
    case "unit":
      return mergeborder(
        value,
        pseudovariables.style.value,
        pseudovariables.color.value
      );
  }
}

export default function useCSSBorder(
  variable: IVariable,
  fallbacksize: string = "0",
  fallbackstyle: string = "none",
  fallbackcolor: string = "hsl(0, 0%, 0%)"
): IUseCSSBorderReturnValue {
  const variableediting = useVariableEditing(variable.domain);
  const chunks = splitToParts(variable.value ?? "0 none");
  const parsedborder = createborder(chunks);
  const pseudovariables = {
    color: generatepseudovariable(
      variable,
      "color",
      "color",
      ensurecolor(parsedborder.color, fallbackcolor)
    ),
    size: generatepseudovariable(
      variable,
      "size",
      "unit",
      parsedborder.size ?? fallbacksize
    ),
    style: generatepseudovariable(
      variable,
      "style",
      "text",
      parsedborder.style ?? fallbackstyle
    ),
  };

  return {
    generatepseudovariables: () => pseudovariables,
    createOnBreakrelation: (pseudovariable) => {
      return () => {
        variableediting.update({
          ...variable,
          value: updateborder(
            pseudovariable,
            pseudovariables,
            choosefallback(
              pseudovariable,
              fallbacksize,
              fallbackstyle,
              fallbackcolor
            )
          ),
        });
      };
    },
    createOnChange: (pseudovariable) => {
      return (value) => {
        variableediting.update({
          ...variable,
          value: updateborder(pseudovariable, pseudovariables, value),
        });
      };
    },
    createOnChangeRelation: (pseudovariable) => {
      return (variablename) => {
        variableediting.update({
          ...variable,
          value: updateborder(
            pseudovariable,
            pseudovariables,
            `var(--${variablename})`
          ),
        });
      };
    },
  };
}
