import { AppTabParams } from '@app/types';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, CompositeScreenProps } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type ManageUsersStackParams = {
  CreateUserScreen: undefined;
  ListUsersScreen: undefined;
};

// Helpers
export type ManageUsersStackScreenProps<T extends keyof ManageUsersStackParams> = CompositeScreenProps<
  NativeStackScreenProps<ManageUsersStackParams, T>,
  BottomTabScreenProps<AppTabParams>
>;
export type ManageUsersStackNavigationProp<T extends keyof ManageUsersStackParams> = CompositeNavigationProp<
  NativeStackNavigationProp<ManageUsersStackParams, T>,
  BottomTabNavigationProp<AppTabParams>
>;
