import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1, height: 10 }} edges={["top"]}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Index" />
            <Stack.Screen name="silverMatch" />
            <Stack.Screen name="goldMatch" />
            <Stack.Screen name="Profile" />
            <Stack.Screen name="login" />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="Home" />
          </Stack>
          {/* <StatusBar style="auto" /> */}
        </ThemeProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
