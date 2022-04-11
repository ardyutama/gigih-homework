import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux";
export default function PrivateRoute({children, ...rest}) {
    const {isLogin} = useSelector((state)=> state.auth)
    return (
        <Route
            {...rest}
            render={({location}) => 
                isLogin !== false ? (
                    children
                ) : (
                    <Redirect to={{  pathname: "/", state: {from: location} }} />
            )}
        />
    )
};
