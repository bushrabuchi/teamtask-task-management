export const lightColors = {
  // Brand
  primary: "#2463C5",
  primaryHover: "#1D4FA3",
  primaryLight: "#EAF1FF",
  accent: "#3478E5",
  navy: "#163253",
  navyLight: "#275A85",

  // Backgrounds
  background: "#F3F7FC",
  surface: "#FFFFFF",
  surfaceSecondary: "#EAF1FA",
  surfaceBlue: "#DCE9F7",

  // Text
  text: "#202938",
  textSecondary: "#778397",
  textMuted: "#98A2B3",
  textOnDark: "#FFFFFF",

  // Borders
  border: "#E5EAF2",
  borderStrong: "#D5DEEB",

  // Status
  success: "#23834B",
  successBackground: "#E9F8EF",
  warning: "#AD791D",
  warningBackground: "#FFF7E7",
  danger: "#D34D39",
  dangerBackground: "#FFF0ED",
  info: "#5268C8",
  infoBackground: "#EDF2FF",

  // Accent
  gold: "#D8A94E",
  goldLight: "#F7EACB",

  // Utility
  overlay: "rgba(15, 35, 60, 0.45)",
  transparent: "transparent",
} as const;

export const darkColors = {
  primary: "#6B9DF5",
  primaryHover: "#85ADFA",
  primaryLight: "#263C5E",
  accent: "#83AAFF",
  navy: "#EAF1FC",
  navyLight: "#AFC8E4",

  background: "#111827",
  surface: "#1C2637",
  surfaceSecondary: "#253247",
  surfaceBlue: "#263C5E",

  text: "#E4EAF4",
  textSecondary: "#A5B1C4",
  textMuted: "#8492A8",
  textOnDark: "#FFFFFF",

  border: "#344258",
  borderStrong: "#46566E",

  success: "#65D394",
  successBackground: "#193C30",
  warning: "#F2C46B",
  warningBackground: "#49391E",
  danger: "#FF8979",
  dangerBackground: "#482B30",
  info: "#9BB5FF",
  infoBackground: "#293958",

  gold: "#E3BB69",
  goldLight: "#49391E",

  overlay: "rgba(0, 0, 0, 0.6)",
  transparent: "transparent",
} as const;

export type AppColors = typeof lightColors;
