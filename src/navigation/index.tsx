import { AuthNavigator } from '@app/features/auth/navigation/AuthNavigator';
import { AppNavigator } from '@app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import NavigationBar from 'react-native-system-navigation-bar';

const RootNavigator: React.FC = () => {
  // const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    void NavigationBar.setNavigationColor('#fff', 'dark');
  }, []);

  // if (isLoading) {
  //   return null;
  // }

  const shouldRenderAppNavigator = false;

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>{shouldRenderAppNavigator ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
    </>
  );
};

export { RootNavigator };
