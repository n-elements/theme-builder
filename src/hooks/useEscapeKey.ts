import { useKey } from "react-use";

export default function useEscapeKey<T extends (...args: any[]) => any>(fn: T) {
  useKey("Escape", fn);
}
