import Detalhes from "../src/screen/detalhes";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

export default function Page() {
    return (
        <Provider store={store}>
            <Stack.Screen options={{ title: 'detalhes' }} />
            <Detalhes />
        </Provider>

    );
}
