// app/_layout.tsx
import { Stack } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            {/* Force light text in status bar */}
            <StatusBar style="light" />

            {/* Apply dark theme across all navigation */}
            <ThemeProvider value={DarkTheme}>
                <Stack screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#000" }, // Fallback background
                }} />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
