import ThemedButton from "@/src/components/ThemedButton";
import { ThemedText } from "@/src/components/ThemedText";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import React from "react";
import { Linking, View } from "react-native";

const SupportScreen = () => {
  const openTelegram = () => {
    Linking.openURL("https://t.me/YourTelegramChannel");
  };

  const openWhatsApp = () => {
    Linking.openURL("https://wa.me/1234567890");
  };

  const sendEmail = () => {
    Linking.openURL("mailto:support@yourdomain.com");
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title} type='title'>
        🛠️ Need Help?
      </ThemedText>
      <ThemedText style={styles.subtitle}>
        If you're having any issues or questions, feel free to reach out to us
        through one of the following:
      </ThemedText>

      <ThemedButton
        text='💬 Contact via Telegram'
        onPress={openTelegram}
        size='XLarge'
      />

      <ThemedButton
        text='📱 Contact via WhatsApp'
        onPress={openWhatsApp}
        size='XLarge'
      />

      <ThemedButton
        text='📧 Send us an Email'
        onPress={sendEmail}
        size='XLarge'
      />

      <ThemedText type='subtitle' style={styles.footer}>
        We're available 7 days a week and happy to help!
      </ThemedText>
    </View>
  );
};

const styles = createThemedStyles(({ colors, dimensions }) => ({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
    color: colors.text,
  },
  button: {
    backgroundColor: colors.buttonColor,
    padding: 14,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
  },
  footer: {
    marginTop: 32,
    textAlign: "center",
  },
}));

export default SupportScreen;
