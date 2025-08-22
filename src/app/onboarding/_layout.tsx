import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* All screens in onboarding will have no header */}
    </Stack>
  );
}
