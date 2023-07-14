import { Stack, Tabs } from "expo-router";

export function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Overview" }} />
        </Tabs>
    )
}