// See: https://reactnavigation.org/docs/typescript

import { ManageUsersStackParams } from '@app/features/user/types';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

export type AppTabParams = {
  ManageUsersNavigator: NavigatorScreenParams<ManageUsersStackParams>;
  SettingsScreen: undefined;
};

// Helpers
export type AppTabsScreenProps<T extends keyof AppTabParams> = BottomTabScreenProps<AppTabParams, T>;
export type AppTabsNavigationProp<T extends keyof AppTabParams> = BottomTabNavigationProp<AppTabParams, T>;
