import React from 'react';

import { useFocusEffect } from '@react-navigation/native';

// See: https://tanstack.com/query/v3/docs/react/react-native#refresh-on-screen-focus
export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      void refetch();
    }, [refetch])
  );
}
