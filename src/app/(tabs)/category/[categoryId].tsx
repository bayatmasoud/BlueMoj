import AdsList from "@/src/components/AdsList";
import Header from "@/src/components/Header";
import ScreenContainer from "@/src/components/ScreenContainer";
import SearchBar from "@/src/components/SearchBar";
import {
  ads,
  Advertisement,
  categories,
  Category as CatType,
} from "@/src/constants/SampleData";
import useTheme from "@/src/hooks/useTheme";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

const Category = () => {
  const { categoryId } = useLocalSearchParams();
  const [category, setCategory] = useState<CatType | undefined>(undefined);
  const [advertisements, setAdvertisements] = useState<Advertisement[]>(ads);

  useEffect(() => {
    setCategory(categories.find((item) => item.id === Number(categoryId)));
  }, [categoryId]);
  const theme = useTheme();

  return (
    <ScreenContainer
      header={
        <Header
          title={category?.catName || "Not Found"}
          color='light'
          backButton
          rightButton
          rightIconName='plus'
          onRightPress={() => router.navigate("/addAd")}
        />
      }
      backgroundColor={theme.colors.headerBackground}
      enabledPaddingHorizontal={false}
    >
      <View style={styles.bodyContainer}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            data={ads}
            searchKeys={["title", "city"]}
            onResults={setAdvertisements}
            placeHolder='Search City or advertisement title...'
          />
        </View>

        <AdsList ads={advertisements} />
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
    backgroundColor: theme.colors.background,
    gap: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: theme.colors.icon,
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
    backgroundColor: theme.colors.cover,
    justifyContent: "space-between",
  },
  heartContainer: {
    height: 25,
    width: 25,
    backgroundColor: theme.colors.background,
    borderRadius: 180,
    alignSelf: "flex-end",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBarContainer: {
    padding: 10,
    width: theme.dimensions.width,
  },
}));

export default Category;
