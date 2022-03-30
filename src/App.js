import Home from "./pages/home";
import Login from "./pages/login";

export default function App() {
    const isLogin = localStorage.getItem('isLogin');
    return (
        <div style={{justifyItems:"center", textAlign: "center", justifySelf:"center"}}>
            <Login />
            {isLogin && <Home />}
        </div>
    );
}
