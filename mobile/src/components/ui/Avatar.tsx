import {
  Image,
  View,
  StyleSheet,
  type ImageSourcePropType,
} from "react-native";

import AppText from "./AppText";
import { lightColors } from "../../../theme/color";
import { radius } from "../../../theme/radius";

interface AvatarProps {
  name: string;
  image?: ImageSourcePropType;
  size?: number;
}

export default function Avatar({ name, image, size = 48 }: AvatarProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: radius.full,
  };

  if (image) {
    return (
      <Image
        source={image}
        accessibilityLabel={`${name} profile picture`}
        style={avatarStyle}
      />
    );
  }

  return (
    <View style={[styles.fallback, avatarStyle]}>
      <AppText variant="label" color={lightColors.primary}>
        {initials}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  fallback: {
    backgroundColor: lightColors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
});
