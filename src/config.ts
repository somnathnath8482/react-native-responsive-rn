import { BREAKPOINTS } from './breakpoints';

let config = {
  breakpoints: BREAKPOINTS,
};

export const setConfig = (newConfig: Partial<typeof config>) => {
  config = { ...config, ...newConfig };
};

export const getConfig = () => config;