import { AuthStackScreenProps } from '@app/features/auth/types';
import { XStack } from '@app/shared/components';
import { Text } from 'react-native';

export const SignInScreen: React.FC<AuthStackScreenProps<'SignInScreen'>> = () => {
  return (
    <XStack flex={1} backgroundColor="background">
      <Text>teste</Text>
    </XStack>
  );
};
