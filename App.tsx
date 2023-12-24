import { RootNavigator } from '@app/navigation';
import {
  initializeFlipperReactQueryDevTools,
  initializeOnlineManager,
  onAppStateChange,
} from '@app/packages/react-query';
import { useAppState } from '@app/shared/hooks';
import { AuthProvider } from '@app/store/auth';
import { HttpClientProvider } from '@app/store/httpClient';
import { theme } from '@app/theme';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const gestureHandlerStyle = { flex: 1 };
const queryClient = new QueryClient();

initializeFlipperReactQueryDevTools({ queryClient });
initializeOnlineManager();

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
