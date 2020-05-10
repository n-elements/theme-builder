export function formatVariableName(name: string): string {
  const startingChunk = "--";
  return name.startsWith(startingChunk) ? name : startingChunk + name;
}

export function cleanVariableName(name: string) {
  return name
    .replace("--", "")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9_-]/g, "");
}

export function normalizeVariableName(name: string) {
  return formatVariableName(cleanVariableName(name));
}
