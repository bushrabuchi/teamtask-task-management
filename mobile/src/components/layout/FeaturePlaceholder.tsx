import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ScreenContainer from "../ui/ScreenContainer";
import AppCard from "../ui/AppCard";
import AppText from "../ui/AppText";
import { lightColors } from "../../../theme/color";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

interface FeaturePlaceholderProps {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function FeaturePlaceholder({
  title,
  description,
  icon,
}: FeaturePlaceholderProps) {
  return (
    <ScreenContainer contentStyle={styles.container}>
      <View style={styles.header}>
        <AppText variant="heading">{title}</AppText>
        <AppText variant="bodySmall" color={lightColors.textSecondary}>
          Your service-booking account
        </AppText>
      </View>

      <AppCard style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={32} color={lightColors.primary} />
        </View>

        <AppText variant="title">{title}</AppText>

        <AppText color={lightColors.textSecondary} style={styles.description}>
          {description}
        </AppText>

        <View style={styles.status}>
          <View style={styles.statusDot} />
          <AppText variant="caption" color={lightColors.success}>
            Feature development planned
          </AppText>
        </View>
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    gap: spacing.xs,
  },
  card: {
    alignItems: "center",
    paddingVertical: spacing["3xl"],
    gap: spacing.md,
  },
  iconContainer: {
    width: 76,
    height: 76,
    borderRadius: radius.xl,
    backgroundColor: lightColors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    textAlign: "center",
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
    backgroundColor: lightColors.success,
  },
});
