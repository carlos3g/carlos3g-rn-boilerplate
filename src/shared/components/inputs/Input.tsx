import { Theme } from '@app/packages/restyle';
import { XStack } from '@app/shared/components/layout';
import { RegexHelper } from '@app/shared/helpers';
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
import { memo, useCallback, useMemo, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData, TextInputProps } from 'react-native';

const isString = (value: unknown) => typeof value === 'string' || value instanceof String;

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

export const REInput = createRestyleComponent<TextInputProps & BoxProps<Theme>, Theme>(restyleFunctions, TextInput);

type InheritedProps = Omit<React.ComponentProps<typeof REInput>, 'onChange' | 'onChangeText' | 'value'>;

export interface InputProps<T> extends InheritedProps {
  transformer?: (text: string, text2?: string) => T;
  onChange?: (value: T) => void;
  value?: T | string;
  leftIcon?: JSX.Element;
  mask?: string;
}

// eslint-disable-next-line react/function-component-definition
function UnmemoizedInput<T>(props: InputProps<T>) {
  const { onChange, transformer, value, leftIcon, borderColor, borderWidth, mask, borderRadius, ...rest } = props;
  const [controlledValue, setControlledValue] = useState<string>('');

  const innerTransformer: ((v1: string, v2?: string) => T) | undefined = useMemo(() => {
    if (mask) {
      return (rawValue: string) => RegexHelper.toPattern(rawValue, mask) as T;
    }

    return transformer;
  }, [mask, transformer]);

  const onKeyPress = useCallback(
    ({ nativeEvent: { key } }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
      if ([',', '.'].includes(key)) {
        return;
      }

      const result = key === 'Backspace' ? controlledValue.slice(0, -1) : controlledValue + key;

      setControlledValue(result);
    },
    [controlledValue]
  );

  const innerOnChangeText = useCallback(
    (rawValue: string) => {
      if (!rawValue) {
        onChange?.('' as unknown as T);
        return;
      }

      if (!innerTransformer) {
        onChange?.(rawValue as unknown as T);
        return;
      }

      try {
        const transformedValue = innerTransformer(rawValue, controlledValue);
        onChange?.(transformedValue);
      } catch (error) {
        console.warn(error);
      }
    },
    [onChange, innerTransformer, controlledValue]
  );

  return (
    <XStack
      alignItems="center"
      backgroundColor="background"
      height={58}
      borderRadius={borderRadius || 'l'}
      paddingHorizontal="m"
      overflow="hidden"
      rowGap="m"
      borderColor={borderColor || 'background'}
      borderWidth={borderWidth || 1}
    >
      {leftIcon}

      <REInput
        padding="none"
        onKeyPress={onKeyPress}
        flex={1}
        height="100%"
        onChangeText={innerOnChangeText}
        value={isString(value) ? (value as unknown as string) : JSON.stringify(value)}
        {...rest}
      />
    </XStack>
  );
}

interface IdentityFunction {
  <T>(fn: InputProps<T>): React.ReactNode;
}

export const Input = memo(UnmemoizedInput) as unknown as IdentityFunction;
