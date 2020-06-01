import { VariableValue } from "@store/theming/types";

export enum Keyword {
  INH = "INH",
  INIT = "INIT",
  REV = "REV",
  UNS = "UNS",
}

export function isKeyword(input: string): input is Keyword {
  return transcodeValueToKeyword(input) !== undefined;
}

export function transcodeValueToKeyword(
  input: VariableValue
): Keyword | VariableValue {
  switch (input) {
    case "inherit":
      return Keyword.INH;
    case "initial":
      return Keyword.INIT;
    case "revert":
      return Keyword.REV;
    case "unset":
      return Keyword.UNS;
    default:
      return input;
  }
}

export function transcodeKeyword(
  keyword: Keyword | VariableValue | string
): VariableValue {
  switch (keyword) {
    case Keyword.INH:
      return "inherit";
    case Keyword.INIT:
      return "initial";
    case Keyword.REV:
      return "revert";
    case Keyword.UNS:
      return "unset";
    default:
      return keyword;
  }
}
