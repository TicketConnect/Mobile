import Detalhes from "../src/screen/detalhes";
import { View } from "react-native";
import { Stack } from "expo-router";

export default function Page() {
    return (
        <View  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Stack.Screen options={{ title: 'detalhes' }} />
            <Detalhes />
        </View>
    );
}
