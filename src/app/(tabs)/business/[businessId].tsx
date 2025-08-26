import Header from "@/src/components/Header";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import ScreenContainer from "@/src/components/ScreenContainer";
import { ThemedText } from "@/src/components/ThemedText";
import { IconSymbol } from "@/src/components/ui/IconSymbol.ios";
import { cateDescription } from "@/src/constants/SampleData";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import React, { useState } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  View,
} from "react-native";

export type CatDescription = {
  id: number;
  description: string;
  title: string;
  email?: string;
  phone?: string;
  image?: string;
};

const BusinessPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const renderImage = (source: ImageSourcePropType) => (
    <ImageBackground
      source={source}
      resizeMethod='resize'
      style={styles.imageBackgroundContainer}
    >
      <Pressable
        style={styles.likePressAble}
        onPress={() => setIsLiked(!isLiked)}
      >
        <IconSymbol
          name={isLiked ? "heart.fill" : "heart"}
          color={isLiked ? "red" : "white"}
        />
      </Pressable>
      <View style={styles.contactInformation}>
        <View style={styles.contactsContainer}>
          <IconSymbol name='envelope' size={25} color={"white"} />
          <ThemedText type='defaultSemiBold' style={{ color: "white" }}>
            {cateDescription.email}
          </ThemedText>
        </View>
        <View style={styles.contactsContainer}>
          <IconSymbol name='phone' size={25} color={"white"} />
          <ThemedText type='defaultSemiBold' style={{ color: "white" }}>
            {cateDescription.phone}
          </ThemedText>
        </View>
      </View>
    </ImageBackground>
  );

  //   const categoryId = useLocalSearchParams();
  return (
    <ScreenContainer
      enabledPaddingHorizontal={false}
      header={
        <Header
          title={cateDescription.title}
          color='dark'
          backButton
          buttonBorderEnable={false}
        />
      }
    >
      <ParallaxScrollView
        headerImage={renderImage(cateDescription.image)}
        headerBackgroundColor={{
          dark: "white",
          light: "white",
        }}
      >
        <View>
          <View
            style={[
              styles.addressContainer,
              {
                shadowColor: "black",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                  width: 2,
                  height: 4,
                },
              },
            ]}
          >
            <IconSymbol
              name='location.fill.viewfinder'
              size={18}
              color='white'
            />
            <ThemedText type='subtitle' lightColor='white'>
              {cateDescription.address}
            </ThemedText>
          </View>
          <ThemedText type='title'>{cateDescription.title}</ThemedText>

          <ThemedText type='default' style={styles.contextContainer}>
            {cateDescription.description}
          </ThemedText>
        </View>
      </ParallaxScrollView>
    </ScreenContainer>
  );
};

const styles = createThemedStyles((theme) => ({
  imageBackgroundContainer: {
    height: "100%",
    width: theme.dimensions.width,
  },
  likePressAble: {
    height: 30,
    width: 30,
    borderRadius: 80,
    alignSelf: "flex-end",
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  contactInformation: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#3631317d",
  },
  contactsContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 5,
    width: theme.dimensions.width,
  },
  addressContainer: {
    flexDirection: "row",
    color: theme.colors.background,
    backgroundColor: theme.colors.headerBackground,
    marginRight: 20,
    padding: 10,
    borderRadius: 8,
    gap: 5,
    width: theme.dimensions.width - 60,
  },
  contextContainer: { textAlign: "justify", paddingTop: 10 },
}));

export default BusinessPage;
