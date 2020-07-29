import React, { ReactNode } from 'react';
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle';
import { theme } from './theme';

export function ThemeProvider(props: { children: ReactNode }) {
  const { children } = props;
  return <RestyleThemeProvider {...{ theme }}>{children}</RestyleThemeProvider>;
}
