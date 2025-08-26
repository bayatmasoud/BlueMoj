import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, View } from "react-native";
import { Advertisement } from "../constants/SampleData";
import { createThemedStyles } from "../hooks/utils/themeStylesSheet";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";

type AdsCardProps = {
  item: Advertisement;
  index: number;
  adsLength: number;
  onLinked: (id: number | string) => void;
};

const AdsCard = ({ item, index, adsLength, onLinked }: AdsCardProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/(tabs)/business/${item.id}`)}
      style={index === adsLength - 1 && { paddingBottom: 50 }}
    >
      <ImageBackground
        source={item.image}
        resizeMethod='scale'
        style={styles.imageStyle}
        borderRadius={8}
      >
        <Pressable
          style={styles.heartContainer}
          onPress={() => onLinked(item.id)}
        >
          <IconSymbol
            name={item.isLiked ? "heart.fill" : "heart"}
            color={item.isLiked ? "red" : "black"}
            size={20}
          />
        </Pressable>
        <View style={styles.coverStyle}>
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
const styles = createThemedStyles((theme) => ({
  imageStyle: {
    height: 220,
    width: theme.dimensions.width / 2 - 20,
    margin: 5,
    borderRadius: 10,
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
  coverStyle: {
    height: 60,
    position: "absolute",
    bottom: 0,
    width: theme.dimensions.width / 2 - 20,
    borderRadius: 8,
    backgroundColor: "#363131c8",
    justifyContent: "space-between",
  },
}));
export default AdsCard;
