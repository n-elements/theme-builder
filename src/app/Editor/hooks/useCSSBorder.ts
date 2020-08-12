import { IVariable, VariableType } from "@store/theming/types";
import Color from "color";
import { Option, TryCatch } from "tiinvo";
import { maybeGetRelatedVariables } from "../helpers/variable";
import {
  OnBreakReferenceHandler,
  OnChangeHandler,
  OnChangeRelationHandler,
} from "../types/fields";
import useVariableEditing from "./useVariableEditing";
import useVariables from "./useVariables";

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

const createborder = (chunks: string[]): IBorder => {
  const [size, style, color, ...colors] = chunks;
  return {
    color: [color, ...colors].join(""),
    size,
    style,
  };
};
const generatepseudovariable = (
  variable: IVariable,
  name: string,
  type: VariableType,
  value: any,
  _referenceId?: any
): IVariable => ({
  _referenceId,
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

function getVariableIdFromArray(
  index: number,
  array: Option<IVariable>[]
): string | undefined {
  return Option(array[index]).mapOrElse(() => undefined, getVariableId);
}

function getVariableId(maybevariable: Option<IVariable>): string | undefined {
  return maybevariable.map((arg) => arg?._id).unwrapOr(undefined);
}

export default function useCSSBorder(
  variable: IVariable,
  fallbacksize: string = "0",
  fallbackstyle: string = "none",
  fallbackcolor: string = "hsl(0, 0%, 0%)"
): IUseCSSBorderReturnValue {
  const variableediting = useVariableEditing(variable.domain);
  const variables = useVariables("*");
  const chunks = splitToParts(variable.value ?? "0 none");
  const parsedborder = createborder(chunks);
  const mayberelatedVariables = maybeGetRelatedVariables(
    variables,
    parsedborder.color,
    parsedborder.size,
    parsedborder.style
  );
  const pseudovariables = {
    color: generatepseudovariable(
      variable,
      "color",
      "color",
      ensurecolor(parsedborder.color, fallbackcolor),
      getVariableIdFromArray(0, mayberelatedVariables)
    ),
    size: generatepseudovariable(
      variable,
      "size",
      "unit",
      parsedborder.size ?? fallbacksize,
      getVariableIdFromArray(1, mayberelatedVariables)
    ),
    style: generatepseudovariable(
      variable,
      "style",
      "text",
      parsedborder.style ?? fallbackstyle,
      getVariableIdFromArray(2, mayberelatedVariables)
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
        variableediting.deleteReferenceToVariable(variable);
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
