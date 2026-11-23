import {
  Pressable,
  StyleSheet,
  ActivityIndicator,
  type ViewStyle,
} from "react-native";

import AppText from "./AppText";
import { lightColors } from "../../../theme/color";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

type ButtonVariant = "primary" | "secondary" | "gold";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export default function AppButton({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  style,
}: AppButtonProps) {
  const isDisabled = disabled || loading;

  const backgroundColors = {
    primary: lightColors.primary,
    secondary: lightColors.primaryLight,
    gold: lightColors.gold,
  };

  const textColors = {
    primary: "#FFFFFF",
    secondary: lightColors.primary,
    gold: lightColors.navy,
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: backgroundColors[variant] },
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColors[variant]} />
      ) : (
        <AppText variant="label" color={textColors[variant]}>
          {title}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.5,
  },
});
