import AdsList from "@/src/components/AdsList";
import Header from "@/src/components/Header";
import ScreenContainer from "@/src/components/ScreenContainer";
import SearchBar from "@/src/components/SearchBar";
import { ads } from "@/src/constants/SampleData";
import useTheme from "@/src/hooks/useTheme";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import useLikedStore from "@/src/stores/likedStore";
import { useState } from "react";
import { View } from "react-native";

const SavedScreen = () => {
  const likedBusiness = useLikedStore((state) => state.likedBusiness);
  const likedIds = likedBusiness.map((b) => b.businessId);
  const likedAds = ads.filter((ad) => likedIds.includes(ad.id));
  const { colors } = useTheme();
  const [searchedAds, setSearchedAds] = useState(likedAds);

  return (
    <ScreenContainer
      enabledPaddingHorizontal={false}
      header={<Header title='Saved' backButton color='light' />}
      backgroundColor={colors.headerBackground}
    >
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar
            data={likedAds}
            searchKeys={["title", "city"]}
            onResults={setSearchedAds}
            placeHolder='Search City or advertisement title...'
          />
        </View>
        <AdsList ads={searchedAds} />
      </View>
    </ScreenContainer>
  );
};

const styles = createThemedStyles(({ colors, dimensions }) => ({
  container: {
    flex: 1,
    flexDirection: "column",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  searchBar: {
    padding: 10,
    width: dimensions.width - 10,
  },
}));

export default SavedScreen;
