import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type Size = "XSmall" | "small" | "medium" | "large" | "XLarge";

type Props = {
  text: string;
  size?: Size;
  disabled?: boolean;
  onPress: () => void;
};

const sizeStyles: Record<Size, ViewStyle> = {
  XSmall: { paddingVertical: 6, paddingHorizontal: 12 },
  small: { paddingVertical: 8, paddingHorizontal: 16 },
  medium: { paddingVertical: 10, paddingHorizontal: 20 },
  large: { paddingVertical: 12, paddingHorizontal: 24 },
  XLarge: { paddingVertical: 14, paddingHorizontal: 28 },
};

export default function ThemedButton({
  text,
  size = "medium",
  disabled = false,
  onPress,
}: Props) {
  const buttonStyle = [
    styles.button,
    sizeStyles[size],
    {
      backgroundColor: disabled ? "#ccc" : "#007BFF",
    },
  ];

  const textStyle = [
    styles.text,
    {
      color: disabled ? "#666" : "#ffffffff",
    },
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
