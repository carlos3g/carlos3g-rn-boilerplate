import { CreateUserScreen, ListUsersScreen } from '@app/features/user/screens';
import { ManageUsersStackParams } from '@app/types';
import { createNativeStackNavigator, type NativeStackNavigationOptions } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator<ManageUsersStackParams>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  headerTransparent: true,
  headerBlurEffect: 'light',
  headerTitle: '',
};

const screenOptions: { [key in keyof ManageUsersStackParams]?: NativeStackNavigationOptions } = {
  CreateUserScreen: { headerShown: true },
  ListUsersScreen: { headerShown: true },
};

const ManageUsersNavigator = () => (
  <Navigator initialRouteName="ListUsersScreen" screenOptions={defaultScreenOptions}>
    <Screen name="CreateUserScreen" component={CreateUserScreen} options={screenOptions.CreateUserScreen} />
    <Screen name="ListUsersScreen" component={ListUsersScreen} options={screenOptions.ListUsersScreen} />
  </Navigator>
);

export { ManageUsersNavigator };
