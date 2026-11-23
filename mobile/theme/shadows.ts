import { Platform } from "react-native";

export const shadows = {
  small: Platform.select({
    ios: {
      shadowColor: "#17233B",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 5,
    },
    android: {
      elevation: 2,
    },
    default: {},
  }),

  medium: Platform.select({
    ios: {
      shadowColor: "#17233B",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
    },
    android: {
      elevation: 5,
    },
    default: {},
  }),

  large: Platform.select({
    ios: {
      shadowColor: "#17233B",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.14,
      shadowRadius: 20,
    },
    android: {
      elevation: 9,
    },
    default: {},
  }),
};
