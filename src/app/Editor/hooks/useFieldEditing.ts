import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import useEscapeKey from "@hooks/useEscapeKey";

export default function useFieldEditing() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const createOpenHandler = (isOpen: boolean) => () => setOpen(isOpen);

  useClickAway(ref, createOpenHandler(false));
  useEscapeKey(createOpenHandler(false));

  return {
    ref,
    open,
    createOpenHandler,
  };
}
