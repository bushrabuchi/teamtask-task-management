import { View, StyleSheet, type ViewStyle } from "react-native";

import { lightColors } from "../../../theme/color";
import { typography } from "../../../theme/typography";
import { spacing } from "../../../theme/spacing";
import { radius } from "../../../theme/radius";
import { shadows } from "../../../theme/shadows";
interface AppCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

export default function AppCard({
  children,
  style,
  padding = spacing.lg,
}: AppCardProps) {
  return <View style={[styles.card, { padding }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: lightColors.surface,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: lightColors.border,
    ...shadows.small,
  },
});
