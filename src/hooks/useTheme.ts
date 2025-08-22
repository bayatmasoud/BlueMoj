// useTheme.ts
import { baseTheme, Colors, Theme } from '@/src/constants/Colors';
import { useColorScheme } from './useColorScheme';

const useTheme = ():Theme =>{
  const scheme = useColorScheme() ?? 'light';
  const colors = scheme === 'dark' ? Colors.dark : Colors.light;

  return {
    colors,
    dimensions:baseTheme,
  };
}
export default useTheme;