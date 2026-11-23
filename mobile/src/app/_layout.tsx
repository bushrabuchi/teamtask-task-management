import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { lightColors, darkColors } from "../../theme/color";
import { radius } from "../../theme/radius";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: lightColors.background,
          },
          animation: "fade",
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
