import { useAppState } from '@app/hooks';
import { RootNavigator } from '@app/navigation';
import { AuthProvider } from '@app/store/auth';
import { HttpClientProvider } from '@app/store/httpClient';
import { theme } from '@app/theme';
import NetInfo from '@react-native-community/netinfo';
import { ThemeProvider } from '@shopify/restyle';
import { AppStateStatus, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider, focusManager, onlineManager } from 'react-query';

const onAppStateChange = (status: AppStateStatus) => {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
};

// See: https://tanstack.com/query/v3/docs/react/react-native#online-status-management
onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    if (state.isConnected !== null) {
      setOnline(state.isConnected);
    }
  });
});

const gestureHandlerStyle = { flex: 1 };
const queryClient = new QueryClient();

const Providers = ({ children }: React.PropsWithChildren<unknown>) => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <HttpClientProvider>{children}</HttpClientProvider>
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  </QueryClientProvider>
);

const App = () => {
  useAppState(onAppStateChange);

  return (
    <GestureHandlerRootView style={gestureHandlerStyle}>
      <Providers>
        <Host>
          <RootNavigator />
        </Host>
      </Providers>

      <Toast position="top" />
    </GestureHandlerRootView>
  );
};

export default App;
