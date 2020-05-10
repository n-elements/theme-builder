export function normalizeVariableName(name: string): string {
  const startingChunk = "--";
  return name.startsWith(startingChunk) ? name : startingChunk + name;
}
