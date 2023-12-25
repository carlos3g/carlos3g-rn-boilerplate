import { AuthStackParams } from '@app/features/auth/types';
import { SignInScreen, SignUpScreen } from '@app/screens';
import { createNativeStackNavigator, type NativeStackNavigationOptions } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParams>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  headerTransparent: true,
  headerBlurEffect: 'light',
  headerTitle: '',
};

const screenOptions: { [key in keyof AuthStackParams]?: NativeStackNavigationOptions } = {
  SignUpScreen: { headerShown: true },
  ForgotPasswordScreen: { headerShown: true },
};

const AuthNavigator = () => (
  <Navigator initialRouteName="SignInScreen" screenOptions={defaultScreenOptions}>
    <Screen name="SignInScreen" component={SignInScreen} options={screenOptions.SignInScreen} />
    <Screen name="SignUpScreen" component={SignUpScreen} options={screenOptions.SignUpScreen} />
  </Navigator>
);

export { AuthNavigator };
