import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle';
import { fontFamily, palette } from './constants';

export const theme = createTheme({
  colors: palette,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: fontFamily.bold,
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: fontFamily.semibold,
      color: 'title',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: fontFamily.semibold,
      color: 'title',
    },
    body: { fontSize: 16, lineHeight: 24, fontFamily: fontFamily.regular, color: 'body' },
    button: {
      fontSize: 15,
      fontFamily: fontFamily.regular,
      color: 'body',
    },
  },
});

export type Theme = typeof theme;
export type TextVariants = typeof theme.textVariants;

export const useTheme = () => useRestyleTheme<Theme>();
