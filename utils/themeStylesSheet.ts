// themedStyleSheet.ts
import { Theme } from '@/src/constants/Colors';
import useTheme from '@/src/hooks/useTheme';
import { StyleSheet } from 'react-native';

export function createThemedStyles<T extends StyleSheet.NamedStyles<T>>(
  stylesFn: (theme: Theme) => T
): T {
  const theme = useTheme();
  return StyleSheet.create(stylesFn(theme));
}
