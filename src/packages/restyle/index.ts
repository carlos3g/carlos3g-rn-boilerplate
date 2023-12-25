import { $palette } from '@app/theme/palette';
import { createTheme } from '@shopify/restyle';

// See: https://shopify.github.io/restyle/fundamentals

export const theme = createTheme({
  colors: {
    background: $palette.white,
    cardPrimaryBackground: $palette.purple,
    cardSecondaryBackground: $palette.green,
    title: $palette.black,
    text: $palette.white,
    transparent: 'transparent',
  },
  spacing: {
    none: 0,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  breakpoints: {},
  zIndices: {
    under: -1,
  },
  borderRadii: {
    none: 0,
    s: 2,
    m: 4,
    l: 8,
    xl: 12,
    xxl: 16,
  },
  textVariants: {
    defaults: {
      color: 'text',
    },
    header: {
      fontSize: 48,
      fontWeight: 'bold',
      color: 'title',
    },
    body: {
      fontSize: 16,
    },
  },
  cardVariants: {
    defaults: {
      padding: 'm',
      borderRadius: 10,
    },
    primary: {
      backgroundColor: 'cardPrimaryBackground',
    },
    secondary: {
      backgroundColor: 'cardSecondaryBackground',
    },
  },

  YStackVariants: {
    defaults: {},
  },

  XStackVariants: {
    defaults: {},
  },
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: $palette.black,
    title: $palette.white,
  },
};

export type Theme = typeof theme;
