import NetInfo from '@react-native-community/netinfo';
import { QueryClient, focusManager, onlineManager } from '@tanstack/react-query';
import { AppStateStatus, Platform } from 'react-native';

// See: https://tanstack.com/query/latest/docs/react/react-native#refetch-on-app-focus
export const onAppStateChange = (status: AppStateStatus) => {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
};

// See: https://tanstack.com/query/latest/docs/react/react-native#online-status-management
export const initializeOnlineManager = () => {
  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      if (state.isConnected !== null) {
        setOnline(state.isConnected);
      }
    });
  });
};

// See: https://github.com/bgaleotti/react-query-native-devtools
export const initializeFlipperReactQueryDevTools = ({ queryClient }: { queryClient: QueryClient }) => {
  if (__DEV__) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    void import('react-query-native-devtools').then(({ addPlugin }) => {
      addPlugin({ queryClient });
    });
  }
};
