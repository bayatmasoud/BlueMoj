import Header from "@/src/components/Header";
import { ThemedText } from "@/src/components/ThemedText";
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import { useRouter } from "expo-router";
import { SymbolViewProps } from "expo-symbols";
import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

export type Category = {
  catName: string;
  adsCount: number;
  iconName: SymbolViewProps["name"];
};

export type Advertisement = {
  title: string;
  image: ImageSourcePropType;
  date: string;
  isLiked: boolean;
  id: string | number;
};

const categories: Category[] = [
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

const ads: Advertisement[] = [
  {
    title: "Sarv Market",
    image: require("../../assets/images/sarv.jpeg"),
    date: "Apr 28 - 2025",
    isLiked: true,
    id: 1,
  },
  {
    title: "Patogh Resturant",
    image: require("../../assets/images/patogh.jpg"),
    date: "Apr 28 - 2025",
    isLiked: false,
    id: 2,
  },
  {
    title: "Sarv Market",
    image: require("../../assets/images/sarv.jpeg"),
    date: "Apr 28 - 2025",
    isLiked: false,
    id: 3,
  },
  {
    title: "Patogh Resturant",
    image: require("../../assets/images/patogh.jpg"),
    date: "Apr 28 - 2025",
    isLiked: true,
    id: 4,
  },
];

const Dashboard = () => {
  const router = useRouter();
  const [adsHolder, setAdsHolder] = useState<Advertisement[]>(ads);

  const settingHandler = () => {
    router.push("/settings");
  };

  const onLinked = (id: string | number) => {
    const selectedItem = adsHolder.find((item) => item.id === id);
    if (selectedItem) {
      const updatedItem: Advertisement = {
        title: selectedItem.title,
        image: selectedItem.image,
        date: selectedItem.date,
        isLiked: !selectedItem.isLiked,
        id: selectedItem.id,
      };
      setAdsHolder((prevAds) =>
        prevAds.map((item) => (item.id === id ? updatedItem : item))
      );
    }
  };

  const renderAds = ({ item }: { item: Advertisement }) => {
    return (
      <Pressable onPress={() => router.push(`/(tabs)/${item.id}`)}>
        <ImageBackground
          source={item.image}
          resizeMethod='scale'
          style={styles.imageStyle}
          borderRadius={8}
        >
          <View style={styles.coverStyle}>
            <Pressable
              style={styles.heartContainer}
              onPress={() => onLinked(item.id)}
            >
              <IconSymbol
                name={item.isLiked ? "heart.fill" : "heart"}
                color={item.isLiked ? "red" : "black"}
              />
            </Pressable>

            <View style={{ padding: 5 }}>
              <ThemedText type='title' style={{ color: "white" }}>
                {item.title}
              </ThemedText>
              <ThemedText type='subtitle' style={{ color: "white" }}>
                {item.date}
              </ThemedText>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    );
  };

  const renderCategories = ({ item }: { item: Category }) => {
    return (
      <View key={item.catName} style={styles.categoryContainer}>
        <IconSymbol name={item.iconName} size={28} color={"black"} />
        <Text>{item.catName}</Text>
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
        <FlatList data={adsHolder} renderItem={renderAds} numColumns={2} />
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
    height: 220,
    width: theme.dimensions.width / 2 - 20,
    borderRadius: 8,
    backgroundColor: "#3631317d",
    justifyContent: "space-between",
  },
  heartContainer: {
    height: 30,
    width: 30,
    backgroundColor: "white",
    borderRadius: 80,
    alignSelf: "flex-end",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default Dashboard;
// Removed unused uri function
