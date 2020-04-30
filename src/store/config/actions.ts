import { prefix } from "redux-aar";

const createaction = prefix("config");

export const reset = createaction("reset");

export const updatesetting = createaction<{ name: string; value: unknown }>(
  "updatesetting"
);
