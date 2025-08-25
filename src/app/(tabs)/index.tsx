import Header from "@/src/components/Header";
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import { useRouter } from "expo-router";
import { SymbolViewProps } from "expo-symbols";
import React from "react";
import { FlatList, Text, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

export type AD = {
  catName: string;
  adsCount: number;
  iconName: SymbolViewProps["name"];
};

const Dashboard = () => {
  const router = useRouter();

  const ads: AD[] = [
    { catName: "Cars", adsCount: 20, iconName: "car.fill" },
    {
      catName: "Real Estate",
      adsCount: 10,
      iconName: "house.fill",
    },
    {
      catName: "Electronics",
      adsCount: 15,
      iconName: "light.beacon.max",
    },
    {
      catName: "Furniture",
      adsCount: 5,
      iconName: "sofa.fill",
    },
    { catName: "Jobs", adsCount: 8, iconName: "gear.badge.checkmark" },
    { catName: "Services", adsCount: 12, iconName: "wheelchair" },
    { catName: "Events", adsCount: 7, iconName: "calendar" },
  ];

  const settingHandler = () => {
    router.push("/settings");
  };

  const renderAds = ({ item }: { item: AD }) => {
    return (
      <View key={item.catName} style={styles.categoryContainer}>
        <IconSymbol name={item.iconName} size={28} color={"black"} />
        <Text>{item.catName}</Text>
        <Text>{item.adsCount}</Text>
      </View>
    );
  };

  return (
    <ScreenContainer
      enabledPaddingHorizontal={false}
      header={
        <Header
          title={"Home"}
          rightButton
          rightIconName='gearshape.fill'
          onRightPress={settingHandler}
        />
      }
      backgroundColor='#294c5aff'
    >
      <View style={styles.bodyContainer}>
        <FlatList data={ads} renderItem={renderAds} numColumns={3} />
      </View>
    </ScreenContainer>
  );
};

const styles = createThemedStyles((theme) => ({
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: theme.colors.background,
    alignItems: "center",
  },
  categoryContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    height: 100,
    width: 100,
    backgroundColor: "#f0f0f0",
    gap: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
}));

export default Dashboard;
