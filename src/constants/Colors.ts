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
}

export const Colors = {
  light: {
    text: '#11181C',
    background: '#ffffffff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#3080cfff',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const baseTheme = {
...useDimensions(),
  scales: {
    small: 0.8,
    medium: 1,
    large: 1.2,
  },
};

export type Theme = {
  colors: ColorsType;
  dimensions: typeof baseTheme;
};
