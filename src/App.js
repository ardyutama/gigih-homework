import {Provider} from "react-redux";
import {store} from "./store/store";
import Routes from "./router";

export default function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}
