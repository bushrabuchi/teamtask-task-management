import { View, TextInput, StyleSheet, type TextInputProps } from "react-native";

import AppText from "./AppText";
import { lightColors } from "../../../theme/color";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

interface AppInputProps extends TextInputProps {
  label: string;
  error?: string;
}

export default function AppInput({
  label,
  error,
  style,
  ...inputProps
}: AppInputProps) {
  return (
    <View style={styles.container}>
      <AppText variant="label">{label}</AppText>

      <TextInput
        {...inputProps}
        placeholderTextColor={lightColors.textMuted}
        accessibilityLabel={label}
        style={[styles.input, error ? styles.inputError : null, style]}
      />

      {error ? (
        <AppText variant="caption" color={lightColors.danger}>
          {error}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: lightColors.border,
    borderRadius: radius.md,
    backgroundColor: lightColors.surface,
    paddingHorizontal: spacing.base,
    fontSize: 15,
    color: lightColors.text,
  },
  inputError: {
    borderColor: lightColors.danger,
  },
});
