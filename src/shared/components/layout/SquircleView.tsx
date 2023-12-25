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
  useTheme,
  visible,
} from '@shopify/restyle';
import { forwardRef, memo, useMemo } from 'react';
import {
  SquircleParams as RNSquircleParams,
  SquircleView as RNSquircleView,
  SquircleViewProps as RNSquircleViewProps,
} from 'react-native-figma-squircle';
import Animated from 'react-native-reanimated';

const RNSquircleViewWithRef = forwardRef((props: RNSquircleViewProps, _) => <RNSquircleView {...props} />);

const AnimatedRNSquircleViewWithRef = Animated.createAnimatedComponent(RNSquircleViewWithRef);

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

export const RESquircleView = createRestyleComponent<SquircleViewProps, Theme>(
  restyleFunctions,
  AnimatedRNSquircleViewWithRef
);

type SquircleViewProps = React.PropsWithChildren<
  Partial<
    Omit<
      React.ComponentProps<typeof AnimatedRNSquircleViewWithRef> & BoxProps<Theme>,
      'children' | 'key' | 'ref' | 'pointerEvents'
    >
  >
>;

const UnmemoizedSquircleView: React.FC<SquircleViewProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { children, backgroundColor, borderRadius, borderColor, borderWidth, ...rest } = props;

  const theme = useTheme<Theme>();

  const squircleParams: RNSquircleParams = useMemo(() => {
    const fillColor = backgroundColor ? theme.colors[backgroundColor] : 'transparent';
    const strokeColor = borderColor ? theme.colors[borderColor] : 'transparent';
    const cornerRadius = borderRadius ? theme.borderRadii[borderRadius] : 15;
    const strokeWidth = borderWidth || 0;

    return {
      cornerSmoothing: 1,
      cornerRadius,
      fillColor,
      strokeColor,
      strokeWidth,
    };
  }, [backgroundColor, borderColor, borderWidth, borderRadius, theme]);

  return (
    <RESquircleView squircleParams={squircleParams} {...rest}>
      {children}
    </RESquircleView>
  );
};

export const SquircleView = memo(UnmemoizedSquircleView) as unknown as React.FC<SquircleViewProps>;

export type SquircleParams = RNSquircleParams;
