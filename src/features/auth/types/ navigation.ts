import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParams = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

// Helpers
export type AuthStackScreenProps<T extends keyof AuthStackParams> = NativeStackScreenProps<AuthStackParams, T>;
export type AuthStackNavigationProp<T extends keyof AuthStackParams> = NativeStackNavigationProp<AuthStackParams, T>;
export type AuthStackRouteProp<T extends keyof AuthStackParams> = RouteProp<AuthStackParams, T>;
