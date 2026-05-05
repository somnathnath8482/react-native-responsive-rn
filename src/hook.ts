import { useWindowDimensions } from "react-native";
import { getBreakpoint } from "./resolve";

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const breakpoint = getBreakpoint(width);
  const isTablet = width >= 768;

  return {
    width,
    height,
    breakpoint,
    isTablet,
  };
};
