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
  color?: "light" | "dark";
  buttonBorderEnable?: boolean;
};

const Header = ({
  title,
  onBackPress,
  onRightPress,
  backIconName,
  backButton,
  rightButton,
  rightIconName,
  color = "light",
  buttonBorderEnable = true,
}: HeaderProps) => {
  const router = useRouter();
  return (
    <View style={styles.headerContext}>
      {backButton && (
        <Pressable
          onPress={onBackPress ? onBackPress : () => router.back()}
          style={[styles.backButton, buttonBorderEnable && styles.border]}
        >
          <IconSymbol
            name={backIconName ? backIconName : "arrow.left"}
            size={20}
            color={"black"}
          />
        </Pressable>
      )}
      <View style={styles.titleContainer}>
        <ThemedText
          type={"header"}
          style={{ color: color === "light" ? "white" : "black" }}
        >
          {title}
        </ThemedText>
      </View>

      {rightButton && (
        <Pressable
          onPress={onRightPress ? onRightPress : () => router.back()}
          style={[styles.backButton, buttonBorderEnable && styles.border]}
        >
          <IconSymbol
            name={rightIconName ? rightIconName : "arrow.right"}
            size={20}
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
  },
  border: {
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
