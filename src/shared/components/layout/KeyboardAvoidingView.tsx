import { Theme } from '@app/packages/restyle';
import {
  BoxProps,
  backgroundColor,
  backgroundColorShorthand,
  border,
  createRestyleComponent,
  layout,
  opacity,
  position,
  shadow,
  spacing,
  spacingShorthand,
  visible,
} from '@shopify/restyle';
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from 'react-native';

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
];

export const KeyboardAvoidingView = createRestyleComponent<KeyboardAvoidingViewProps, Theme>(
  restyleFunctions,
  RNKeyboardAvoidingView
);

export type KeyboardAvoidingViewProps = React.PropsWithChildren<BoxProps<Theme>> & RNKeyboardAvoidingViewProps;
