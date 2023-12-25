import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from '@app/shared/components/layout/KeyboardAvoidingView';
import { Platform } from 'react-native';

export type ContainerProps = KeyboardAvoidingViewProps;

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = (props) => {
  const { children, ...rest } = props;

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      flex={1}
      backgroundColor="background"
      paddingHorizontal="xl"
      paddingTop="m"
      paddingBottom="l"
      {...rest}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
