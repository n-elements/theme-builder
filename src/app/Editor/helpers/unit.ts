export enum UnitType {
  EM = "EM",
  INH = "INH",
  NONE = "NONE",
  PERC = "%",
  PX = "PX",
  REM = "REM",
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
    case uppercasedInput.includes(UnitType.PERC):
      return UnitType.PERC;
    case uppercasedInput.includes(UnitType.PX):
      return UnitType.PX;
    default:
      return UnitType.NONE;
  }
}

export function stripUnit(input?: string): string {
  return typeof input === "string"
    ? input.toUpperCase().replace(guessUnitType(input), "")
    : "";
}
