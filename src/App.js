import { useEffect, useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";



export default function App() {
    const isLogin = localStorage.getItem("isLogin");
    return (
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh" }}>
                <Login login={isLogin}/>
                {isLogin && <Home />}
            </div>
    );
}
