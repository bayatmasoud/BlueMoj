import AdsList from "@/src/components/AdsList";
import Header from "@/src/components/Header";
import { ThemedText } from "@/src/components/ThemedText";
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import { ads, categories, Category } from "@/src/constants/SampleData";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

const Dashboard = () => {
  const router = useRouter();

  const settingHandler = () => {
    router.push("/settings");
  };

  const renderCategories = ({ item }: { item: Category }) => {
    return (
      <Pressable
        key={item.catName}
        style={styles.categoryContainer}
        onPress={() => router.push(`/(tabs)/category/${item.id}`)}
      >
        <IconSymbol name={item.iconName} size={28} color={"black"} />
        <Text>{item.catName}</Text>
      </Pressable>
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
        <View style={styles.titleContainer}>
          <ThemedText type='title'>Categories</ThemedText>
        </View>
        <View style={{ height: 80 }}>
          <FlatList
            data={categories}
            renderItem={renderCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.titleContainer}>
          <ThemedText type='title'>The Bests</ThemedText>
        </View>
        <AdsList ads={ads} />
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
    height: 70,
    width: 100,
    backgroundColor: "#f0f0f0",
    gap: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#201515ff",
  },
  titleContainer: {
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: 20,
    marginBottom: 10,
  },
  imageStyle: {
    height: 220,
    width: theme.dimensions.width / 2 - 20,
    margin: 5,
    borderRadius: 10,
  },
  coverStyle: {
    height: 60,
    position: "absolute",
    bottom: 0,
    width: theme.dimensions.width / 2 - 20,
    borderRadius: 8,
    backgroundColor: "#363131c8",
    justifyContent: "space-between",
  },
  heartContainer: {
    height: 25,
    width: 25,
    backgroundColor: "white",
    borderRadius: 180,
    alignSelf: "flex-end",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default Dashboard;
// Removed unused uri function
