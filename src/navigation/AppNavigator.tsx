import { Icon, IconLibName } from '@app/shared/components';
import { Glyphs } from '@app/shared/components/Icon';
import { SettingsScreen } from '@app/features/settings/screens';
import { ManageUsersNavigator } from '@app/features/user/navigation/ManageUsersNavigator';
import type { AppTabParams } from '@app/types';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';

type ScreenOptions = (props: { route: RouteProp<AppTabParams> }) => BottomTabNavigationOptions;

type TabBarIcons = {
  [K in keyof AppTabParams]: {
    onFocusIcon: Glyphs[keyof Glyphs];
    onBlurIcon: Glyphs[keyof Glyphs];
    iconLib: IconLibName;
  };
};

const icons: TabBarIcons = {
  SettingsScreen: {
    onFocusIcon: 'file-text',
    onBlurIcon: 'file-text',
    iconLib: 'Feather',
  },
  ManageUsersNavigator: {
    onFocusIcon: 'person-outline',
    onBlurIcon: 'person-outline',
    iconLib: 'Ionicons',
  },
};

const options: ScreenOptions = ({ route }) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#191632',
  tabBarStyle: { height: 70 },
  tabBarHideOnKeyboard: true,
  tabBarIcon: ({ color, focused, size }) => {
    const { onFocusIcon, onBlurIcon, iconLib } = icons[route.name];
    const iconName = focused ? onFocusIcon : onBlurIcon;

    return <Icon lib={iconLib} name={iconName} color={color} size={size} />;
  },
});

const screenOptions: { [key in keyof AppTabParams]?: BottomTabNavigationOptions } = {};

const { Navigator, Screen } = createBottomTabNavigator<AppTabParams>();

const AppNavigator: React.FC = () => (
  <Navigator screenOptions={options}>
    <Screen component={ManageUsersNavigator} name="ManageUsersNavigator" options={screenOptions.ManageUsersNavigator} />
    <Screen component={SettingsScreen} name="SettingsScreen" options={screenOptions.SettingsScreen} />
  </Navigator>
);

export { AppNavigator };
