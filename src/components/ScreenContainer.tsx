import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

type ScreenContainerProps = {
  header?: ReactNode;
  footer?: React.ReactNode;
  children: ReactNode;
  scrollable?: boolean;
  style?: object;
  enabledPaddingHorizontal?: boolean;
  backgroundColor?: string;
};

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  header,
  footer,
  children,
  scrollable = false,
  style,
  enabledPaddingHorizontal = true,
  backgroundColor = "white",
}) => {
  const Container = scrollable ? ScrollView : View;

  return (
    <View style={[styles.root, { backgroundColor: backgroundColor }]}>
      {header && <View style={styles.header}>{header}</View>}
      <Container
        style={[
          styles.content,
          style,
          { paddingHorizontal: enabledPaddingHorizontal ? 20 : 0 },
        ]}
        contentContainerStyle={scrollable ? styles.content : undefined}
        keyboardShouldPersistTaps='handled'
      >
        {children}
      </Container>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const styles = createThemedStyles((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.dimensions.xPadding,
    paddingTop: theme.dimensions.yPadding,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
}));

export default ScreenContainer;
