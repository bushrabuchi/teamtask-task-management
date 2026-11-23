import { ScrollView, StyleSheet, View, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { lightColors } from "../../../theme/color";
import { spacing } from "../../../theme/spacing";

interface ScreenContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

export default function ScreenContainer({
  children,
  scrollable = true,
  style,
  contentStyle,
}: ScreenContainerProps) {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeArea, style]}
    >
      {scrollable ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.content, contentStyle]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, contentStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: lightColors.background,
  },
  content: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.lg,
    paddingBottom: spacing["3xl"],
    gap: spacing.xl,
  },
});
