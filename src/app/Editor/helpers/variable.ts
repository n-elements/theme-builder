export function formatVariableName(name: string): string {
  const startingChunk = "--";
  return name.startsWith(startingChunk) ? name : startingChunk + name;
}

export function normalizeVariableName(name: string) {
  return formatVariableName(name).replace("--", "").replace(/\s+/g, "-");
}
