import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "../pages/home"
import Login from "../pages/login";
import PrivateRoute from "./PrivateRoute";
export default function Routes(params) {
    return(
        <Router>
            <Switch>
                <PrivateRoute exact path ="/create-playlist">
                   <Home />
                </PrivateRoute>
                <Route exact path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
};
