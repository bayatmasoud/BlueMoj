import Header from "@/src/components/Header";
import ScreenContainer from "@/src/components/ScreenContainer";
import { ThemedText } from "@/src/components/ThemedText";
import { IconSymbol } from "@/src/components/ui/IconSymbol.ios";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import { Link, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const Settings = () => {
  const router = useRouter();
  const renderMenuItems = () => {
    return (
      <Link href={"/onboarding"}>
        <View style={styles.linkItem}>
          <View style={styles.iconTextHolder}>
            <IconSymbol
              name='person.2.badge.gearshape'
              size={25}
              color={"black"}
            />
            <ThemedText style={styles.textPadding}>Change Community</ThemedText>
          </View>

          <IconSymbol name='arrow.right' size={15} color={"black"} />
        </View>
      </Link>
    );
  };

  return (
    <ScreenContainer
      header={<Header title={"Setting"} backButton color='dark' />}
      backgroundColor='#dbdbdbff'
    >
      <View style={styles.listContainer}>{renderMenuItems()}</View>
    </ScreenContainer>
  );
};

const styles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  listContainer: {
    paddingHorizontal: 10,
    backgroundColor: theme.colors.buttonColor,
    justifyContent: "flex-start",
    flex: 0.8,
    flexDirection: "column",
    borderRadius: 20,
    marginTop: 20,
  },
  linkItem: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  iconTextHolder: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: { flex: 1, alignItems: "center" },
  textPadding: { paddingLeft: 10 },
}));

export default Settings;
