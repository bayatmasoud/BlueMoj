import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
      <Text style={styles.title}>🛠️ Need Help?</Text>
      <Text style={styles.subtitle}>
        If you're having any issues or questions, feel free to reach out to us
        through one of the following:
      </Text>

      <TouchableOpacity style={styles.button} onPress={openTelegram}>
        <Text style={styles.buttonText}>💬 Contact via Telegram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={styles.buttonText}>📱 Contact via WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={sendEmail}>
        <Text style={styles.buttonText}>📧 Send us an Email</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        We're available 7 days a week and happy to help!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
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
    color: "#555",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    marginTop: 32,
    fontSize: 14,
    textAlign: "center",
    color: "#888",
  },
});

export default SupportScreen;
