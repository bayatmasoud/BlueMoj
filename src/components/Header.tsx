import { useRouter } from "expo-router";
import { SymbolViewProps } from "expo-symbols";
import { Pressable, View } from "react-native";
import { createThemedStyles } from "../hooks/utils/themeStylesSheet";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol.ios";

type HeaderProps = {
  title: string;
  backButton?: boolean;
  onBackPress?: () => void;
  rightButton?: boolean;
  onRightPress?: () => void;
  backIconName?: SymbolViewProps["name"];
  rightIconName?: SymbolViewProps["name"];
};

const Header = ({
  title,
  onBackPress,
  onRightPress,
  backIconName,
  backButton,
  rightButton,
  rightIconName,
}: HeaderProps) => {
  const router = useRouter();
  return (
    <View style={styles.headerContext}>
      {backButton && (
        <Pressable
          onPress={onBackPress ? onBackPress : () => router.back()}
          style={styles.backButton}
        >
          <IconSymbol
            name={backIconName ? backIconName : "arrow.left"}
            size={15}
            color={"black"}
          />
        </Pressable>
      )}
      <View style={styles.titleContainer}>
        <ThemedText type={"default"}>{title}</ThemedText>
      </View>

      {rightButton && (
        <Pressable
          onPress={onRightPress ? onRightPress : () => router.back()}
          style={styles.backButton}
        >
          <IconSymbol
            name={rightIconName ? rightIconName : "arrow.right"}
            size={15}
            color={"black"}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = createThemedStyles((theme) => ({
  responsiveHeader: { flex: 0.25 },
  titleContainer: { flex: 1, alignItems: "center" },
  backButton: {
    flex: 0.08,
    backgroundColor: theme.colors.buttonColor,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
  },
  headerContext: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default Header;
