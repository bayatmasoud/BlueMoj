import RadioButtonGroup from "@/src/components/RadioButtonGroup";
import ScreenContainer from "@/src/components/ScreenContainer";
import ThemedButton from "@/src/components/ThemedButton";
import { ThemedText } from "@/src/components/ThemedText";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import useConfigStore from "@/src/stores/configStore";
import { getLocales } from "expo-localization";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const options = [
  { key: "IR", label: "Iranian Community" },
  { key: "Tr", label: "Turkish Community" },
  { key: "All", label: "All" },
];

const CommunitySelection = () => {
  const router = useRouter();
  const { setSelectedCommunity, selectedCommunity } = useConfigStore(
    (state) => state
  );

  useEffect(() => {
    if (!selectedCommunity) {
      setSelectedCommunity(getLocales()?.[0].languageCode || "en");
    }
  }, []);

  const handleCommunityChange = (key: string) => {
    setSelectedCommunity(key);
  };

  const handlePress = () => {
    router.replace("../(tabs)");
  };

  return (
    <ScreenContainer
      footer={
        <ThemedButton
          text='Next'
          onPress={handlePress}
          disabled={!selectedCommunity}
        />
      }
    >
      <View style={styles.contentContainer}>
        <ThemedText type={"title"}>Please select the Community</ThemedText>
        <ThemedText type={"default"} style={{ marginTop: 10 }}>
          when you choose a community you can see all the advertisements of that
          special community also if in future you need to change the community
          you can change it from the profile screen.
        </ThemedText>
        <RadioButtonGroup
          items={options}
          onChange={handleCommunityChange}
          defaultKey={selectedCommunity}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = createThemedStyles((theme) => ({
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: theme.dimensions.yPadding + 20,
  },
  contextStyle: {
    flex: 1,
    justifyContent: "center",
  },
}));

export default CommunitySelection;
