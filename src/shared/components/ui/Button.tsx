import { Theme } from '@app/packages/restyle';
import { SquircleParams, SquircleView, Text } from '@app/shared/components';
import {
  BoxProps,
  ResponsiveValue,
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
  useTheme,
  visible,
} from '@shopify/restyle';
import { memo, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { AnimateProps } from 'react-native-reanimated';

const AnimatedButtonTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type InheritedButtonProps = AnimateProps<typeof AnimatedButtonTouchable> & Omit<TouchableOpacityProps, 'children'>;

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

export type ButtonProps = React.PropsWithChildren<
  InheritedButtonProps &
    React.ComponentProps<typeof AnimatedButtonTouchable> &
    BoxProps<Theme> & {
      label?: string;
      labelColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
      loading?: boolean;
    }
>;

const REButton = createRestyleComponent<ButtonProps, Theme>(restyleFunctions, AnimatedButtonTouchable);

const UnmemoizedButton: React.FC<ButtonProps> = (props) => {
  const {
    label,
    children,
    loading,
    labelColor = 'text',
    // eslint-disable-next-line @typescript-eslint/no-shadow
    backgroundColor,
    borderWidth = 1,
    borderColor: _,
    borderRadius,
    ...rest
  } = props;

  const theme = useTheme<Theme>();

  const squircleParams: SquircleParams = useMemo(() => {
    const fillColor = backgroundColor ? theme.colors[backgroundColor] : theme.colors.cardPrimaryBackground;
    const strokeColor = fillColor;
    const cornerRadius = borderRadius ? theme.borderRadii[borderRadius] : 15;
    const strokeWidth = borderWidth;

    return {
      cornerSmoothing: 1,
      cornerRadius,
      fillColor,
      strokeColor,
      strokeWidth,
    };
  }, [backgroundColor, borderRadius, borderWidth, theme]);

  return (
    <REButton
      height={58}
      borderRadius="none"
      borderColor="transparent"
      backgroundColor="transparent"
      borderWidth={borderWidth}
      disabled={loading}
      {...rest}
    >
      {label && !loading && (
        <Text variant="body" color={labelColor} textAlign="center">
          {label}
        </Text>
      )}

      {loading && <ActivityIndicator size="small" color="blue" />}

      {children}

      <SquircleView style={StyleSheet.absoluteFill} zIndex="under" squircleParams={squircleParams} />
    </REButton>
  );
};

interface IdentityFunction {
  (fn: React.PropsWithChildren<ButtonProps>): React.ReactNode;
}

export const Button = memo(UnmemoizedButton) as unknown as IdentityFunction;
