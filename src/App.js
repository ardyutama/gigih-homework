import { useEffect, useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import {Provider} from "react-redux";
import store from "./store/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export default function App() {
    const isLogin = localStorage.getItem('isLogin');
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path ="/create-playlist">
                        {isLogin ? (
                            <Home />
                        ): (
                            <Redirect exact from="/create-playlist" to="/" />
                        )}
                    </Route>
                    <Route exact path="/">
                    {isLogin ? (
                        <Redirect exact from="/" to="/create-playlist" />
                        ) : (
                         <Login login={isLogin}/>
                    )}
                       
                    </Route>
                </Switch>
            </Router>
        </Provider>
        // <Provider store={store}>
        //     <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh" }}>
        //         <Login login={isLogin}/>
        //         {isLogin && <Home />}
        //     </div>
        // </Provider>
    );
}
