import { Text, type TextProps, type TextStyle, StyleSheet } from "react-native";

import { lightColors } from "../../../theme/color";
import { typography } from "../../../theme/typography";

type TextVariant =
  | "heading"
  | "title"
  | "subtitle"
  | "body"
  | "bodySmall"
  | "caption"
  | "label";

interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: string;
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

const variantStyles: Record<TextVariant, TextStyle> = {
  heading: {
    fontSize: typography.sizes["2xl"],
    fontWeight: typography.weights.bold,
    lineHeight: 32,
  },
  title: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    lineHeight: 28,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    lineHeight: 25,
  },
  body: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.regular,
    lineHeight: 23,
  },
  bodySmall: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.regular,
    lineHeight: 19,
  },
  caption: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.regular,
    lineHeight: 16,
  },
  label: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    lineHeight: 20,
  },
};

export default function AppText({
  variant = "body",
  color = lightColors.text,
  children,
  style,
  ...rest
}: AppTextProps) {
  return (
    <Text
      {...rest}
      style={[styles.base, variantStyles[variant], { color }, style]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: typography.fontFamily,
  },
});
