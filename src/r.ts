import { useResponsive } from "./hook";
import { resolveValue } from "./resolve";
import type { ResponsiveValue } from "./types";

export const useR = () => {
  const { breakpoint } = useResponsive();

  const r = (value: number | ResponsiveValue): number => {
    if (typeof value === "number") return value;

    return resolveValue(value, breakpoint);
  };

  return r;
};
