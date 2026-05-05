export type BreakpointKey = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ResponsiveValue = {
  base: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type TypographyInput = {
  size: ResponsiveValue;
  line: number; // multiplier
};