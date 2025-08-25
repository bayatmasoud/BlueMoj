import { Colors, dimensions, fonts, Theme } from '@/src/constants/Colors';

const useTheme = ():Theme =>{
  const scheme = 'light';
  const colors = Colors.light;

  return {
    dark: false,
    colors,
    dimensions:dimensions,
    fonts:fonts
  };
}
export default useTheme;