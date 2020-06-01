export interface IMultiunitValue<T = string> {
  bottom: T;
  left: T;
  right: T;
  top: T;
}

export enum UnitType {
  EM = "EM",
  PX = "PX",
  CH = "CH",
  PERC = "%",
  REM = "REM",
  INH = "INH",
  NONE = "NONE",
  UNS = "UNS",
  REV = "REV",
  INIT = "INIT",
}

export function changeUnit(
  input?: string,
  unit: UnitType = UnitType.NONE
): string {
  const newunit = unit === UnitType.NONE ? "" : unit;
  return stripUnit(input) + newunit.toLowerCase();
}

export function guessUnitType(input?: string): UnitType {
  if (typeof input !== "string") {
    return UnitType.NONE;
  }

  const uppercasedInput = String(input).toUpperCase();

  switch (true) {
    case uppercasedInput.includes(UnitType.REM):
      return UnitType.REM;
    case uppercasedInput.includes(UnitType.EM):
      return UnitType.EM;
    case uppercasedInput.includes(UnitType.INH):
      return UnitType.INH;
    case uppercasedInput.includes(UnitType.UNS):
      return UnitType.UNS;
    case uppercasedInput.includes(UnitType.INIT):
      return UnitType.INIT;
    case uppercasedInput.includes(UnitType.REV):
      return UnitType.REV;
    case uppercasedInput.includes(UnitType.PERC):
      return UnitType.PERC;
    case uppercasedInput.includes(UnitType.PX):
      return UnitType.PX;
    case uppercasedInput.includes(UnitType.CH):
      return UnitType.CH;
    default:
      return UnitType.NONE;
  }
}

export function sanitizeMultiunitValue(value: string): string {
  return value.trim().replace(/\s{2,}/g, " ");
}

export function splitMultiUnitValue(value: string): IMultiunitValue {
  const [top = "", right, bottom, left] = sanitizeMultiunitValue(value).split(
    " "
  );

  return {
    top,
    right: right ?? top,
    bottom: bottom ?? top,
    left: left ?? right ?? top,
  };
}

export function stripUnit(input?: string): string {
  return typeof input === "string"
    ? input.toUpperCase().replace(guessUnitType(input), "")
    : "";
}
