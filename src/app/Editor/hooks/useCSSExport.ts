import useCSSVariables, { CssVar } from "./useCSSVariables";
import useThemeName from "./useThemeName";

function blobby(input: string): Blob {
  return new Blob([input], {
    type: "text/css;charset=utf-8",
  });
}

function normalizeThemeName(name: string): string {
  return [name.replace(/\s+/, "-"), "css"].join(".");
}

function serialize(variables: CssVar) {
  const keys = Object.keys(variables);
  let serialized = "";

  for (let index = 0; index < keys.length; index++) {
    serialized += `\t${keys[index]}: ${variables[keys[index]]};\n`;
  }

  return wrap(serialized);
}

function wrap(input: string): string {
  return [":root {", input, "}"].join("\n");
}

export default function useCSSExport() {
  const variables = useCSSVariables();
  const themename = useThemeName();
  const filepath = window.URL.createObjectURL(blobby(serialize(variables)));
  const filename = normalizeThemeName(themename);

  return {
    filename,
    filepath,
    download() {
      const a = document.createElement("a");
      a.href = filepath;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  };
}
