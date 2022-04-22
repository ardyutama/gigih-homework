import {Provider} from "react-redux";
import {store} from "./store/store";
import Routes from "./router";
import { ChakraProvider } from '@chakra-ui/react'
export default function App() {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Routes />
            </ChakraProvider>
        </Provider>
    );
}
