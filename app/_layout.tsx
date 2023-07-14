import { Stack } from "expo-router";

export function Layout() {
    return (
        <Stack screenOptions={
            {
                animation: "fade"
            }
        }/>
    )
}