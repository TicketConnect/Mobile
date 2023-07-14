import { Provider } from "react-redux";
import { store } from "../src/store/store";
import Home from "../src/screen/home";

export default function Page() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
