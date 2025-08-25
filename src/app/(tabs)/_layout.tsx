import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/src/components/HapticTab";
import { IconSymbol } from "@/src/components/ui/IconSymbol.ios";
import TabBarBackground from "@/src/components/ui/TabBarBackground";
import useTheme from "@/src/hooks/useTheme";

export default function TabLayout() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tabIconSelected,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name='house.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: "saved",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name='paperplane.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='contacts'
        options={{
          title: "Contacts",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name='note.text' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='support'
        options={{
          title: "Support",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name='headphones' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
