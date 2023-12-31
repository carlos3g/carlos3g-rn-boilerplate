import { Theme } from '@app/packages/restyle';
import {
  BoxProps,
  VariantProps,
  backgroundColor,
  backgroundColorShorthand,
  border,
  createRestyleComponent,
  createVariant,
  layout,
  opacity,
  position,
  shadow,
  spacing,
  spacingShorthand,
  visible,
} from '@shopify/restyle';

const variant = createVariant<Theme>({
  themeKey: 'YStackVariants',
  defaults: {
    flexDirection: 'column',
  },
});

const restyleFunctions = [
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  visible,
  layout,
  spacing,
  spacingShorthand,
  border,
  shadow,
  position,
  variant,
];

export const YStack = createRestyleComponent<YStackProps, Theme>(restyleFunctions);

export type YStackProps = React.PropsWithChildren<VariantProps<Theme, 'YStackVariants'> & BoxProps<Theme>>;
