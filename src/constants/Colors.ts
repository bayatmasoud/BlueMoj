/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import useDimensions from "../hooks/useDimensions";


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

type ColorsType = {
  text: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  buttonColor: string
}

export const Colors = {
  light: {
    text: '#11181C',
    background: '#ecececff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    buttonColor:'#ffffffff'
  },
  dark: {
    text: '#3080cfff',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    buttonColor:'#ffffffff'
  },
};

export const fonts = {
  regular: { fontFamily: 'System', fontWeight: '400' as const },
  medium: { fontFamily: 'System', fontWeight: '500' as const },    
  bold: { fontFamily: 'System', fontWeight: '700' as const },
  heavy: { fontFamily: 'System', fontWeight: '900' as const },
};

export const dimensions = {
...useDimensions(),
  scales: {
    small: 0.8,
    medium: 1,
    large: 1.2,
  },
};

export type Theme = {
  dark: boolean;
  colors: ColorsType;
  dimensions: typeof dimensions;
  fonts: typeof fonts;
};
