import type { TypographyInput } from "./types";
import { useR } from "./r";

export const useT = () => {
  const r = useR();

  const t = (input: TypographyInput) => {
    const size = r(input.size);

    return {
      fontSize: size,
      lineHeight: size * input.line,
    };
  };

  return t;
};
