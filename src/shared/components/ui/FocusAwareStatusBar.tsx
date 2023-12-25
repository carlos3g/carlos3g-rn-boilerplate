import { StatusBar, StatusBarProps } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export type FocusAwareStatusBarProps = StatusBarProps;

export const FocusAwareStatusBar: React.FC<FocusAwareStatusBarProps> = (rest) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...rest} /> : null;
};
