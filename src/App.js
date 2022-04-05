import { useEffect, useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import {Provider} from "react-redux";
import store from "./store/store";


export default function App() {
    const isLogin = localStorage.getItem("isLogin");
    return (
        <Provider store={store}>
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh" }}>
                <Login login={isLogin}/>
                {isLogin && <Home />}
            </div>
        </Provider>
    );
}
