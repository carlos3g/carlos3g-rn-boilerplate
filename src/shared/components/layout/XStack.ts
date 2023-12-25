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
  themeKey: 'XStackVariants',
  defaults: {
    flexDirection: 'row',
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

export const XStack = createRestyleComponent<XStackProps, Theme>(restyleFunctions);

export type XStackProps = React.PropsWithChildren<VariantProps<Theme, 'XStackVariants'> & BoxProps<Theme>>;
