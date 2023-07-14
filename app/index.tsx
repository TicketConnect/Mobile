import { Provider } from "react-redux";
import { store } from "../src/store/store";
import Home from "../src/screen/home";
import { Stack } from "expo-router";

export default function Page() {
  return (
    <Provider store={store}>
      <Stack.Screen options={{ title: 'Home' }} />
      <Home />
    </Provider>
  );
}
