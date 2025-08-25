import Header from "@/src/components/Header";
import ScreenContainer from "@/src/components/ScreenContainer";
import { IconSymbol } from "@/src/components/ui/IconSymbol.ios";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import { Link, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const Settings = () => {
  const router = useRouter();
  const renderMenuItems = () => {
    return (
      <View style={styles.linkItem}>
        <View style={styles.iconTextHolder}>
          <IconSymbol
            name='person.2.badge.gearshape'
            size={25}
            color={"black"}
          />
          <Link href={"/onboarding"}>Change Community</Link>
        </View>

        <IconSymbol name='arrow.right' size={15} color={"black"} />
      </View>
    );
  };

  return (
    <ScreenContainer>
      <View style={styles.screenContainer}>
        <View style={styles.responsiveHeader}>
          <Header title='Setting' backButton />
          <View style={styles.listContainer}>{renderMenuItems()}</View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  screenContainer: {
    flex: 1,
    flexDirection: "column",
  },
  headerContext: {
    marginTop: 20,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    flex: 0.08,
    backgroundColor: theme.colors.buttonColor,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
  },
  listContainer: {
    paddingHorizontal: 10,
    backgroundColor: theme.colors.buttonColor,
    flex: 1,
    flexDirection: "column",
    borderRadius: 20,
  },
  linkItem: {
    flex: 1,
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
  responsiveHeader: { flex: 0.25 },
  titleContainer: { flex: 1, alignItems: "center" },
}));

export default Settings;
