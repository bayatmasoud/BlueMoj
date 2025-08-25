import { ThemeProvider, useTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import useConfigStore from "../stores/configStore";

export default function RootLayout() {
  const hydrate = useConfigStore((state) => state.hydrate);
  const [hydrated, setHydrated] = useState(false);
  const theme = useTheme();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const selectedCommunity = useConfigStore((state) => state.selectedCommunity);

  useEffect(() => {
    hydrate().then(() => setHydrated(true));
  }, []);

  useEffect(() => {
    if (loaded) {
      router.replace(!!selectedCommunity ? "/(tabs)" : "/onboarding");
    }
  }, [loaded]);

  if (!loaded || !hydrated) {
    return null;
  }

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
        <Stack.Screen name='onboarding' options={{ headerShown: false }} />
        <Stack.Screen name='settings' options={{ headerShown: false }} />
      </Stack>
      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
