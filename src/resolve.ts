import type { BreakpointKey, ResponsiveValue } from './types';
import { getConfig } from './config';

export const getBreakpoint = (width: number): BreakpointKey => {
  const { breakpoints } = getConfig();

  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
};

export const resolveValue = (
  values: ResponsiveValue,
  bp: BreakpointKey
): number => {
  const order: BreakpointKey[] = ['xl', 'lg', 'md', 'sm', 'xs', 'base'];

  const index = order.indexOf(bp);

  for (let i = index; i < order.length; i++) {
    const key = order[i] as keyof ResponsiveValue;

    if (values[key] !== undefined) {
      return values[key] as number;
    }
  }

  return values.base;
};