import React from 'react';
import { NotifyOnChangeProps } from '@tanstack/query-core';
import { useFocusEffect } from '@react-navigation/native';

// See: https://tanstack.com/query/latest/docs/react/react-native#disable-re-renders-on-out-of-focus-screens
export function useFocusNotifyOnChangeProps(notifyOnChangeProps?: NotifyOnChangeProps) {
  const focusedRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true;

      return () => {
        focusedRef.current = false;
      };
    }, [])
  );

  return () => {
    if (!focusedRef.current) {
      return [];
    }

    if (typeof notifyOnChangeProps === 'function') {
      return notifyOnChangeProps();
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return notifyOnChangeProps.current; // eslint-disable-line @typescript-eslint/no-unsafe-return
  };
}
