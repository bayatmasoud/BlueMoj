import { Colors, dimensions, fonts, Theme } from '@/src/constants/Colors';
import { useColorScheme } from './useColorScheme';

const useTheme = ():Theme =>{
  const scheme = useColorScheme() ?? 'light';
  const colors = scheme === 'dark' ? Colors.dark : Colors.light;

  return {
    dark: scheme === 'dark',
    colors,
    dimensions:dimensions,
    fonts:fonts
  };
}
export default useTheme;