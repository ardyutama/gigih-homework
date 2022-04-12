import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUrl } from "../../utils/spotifyAuth";
import { login } from "../../store/auth-slice";
import { token } from "../../store/token-slice"
import { useEffect } from "react";
import "../../styles.css"

export default function Login() {
    const dispatch = useDispatch();
    let history = useHistory();
    const isLogin = useSelector(state => state.auth.isLogin);

    const getAuthSpotify = (hash) => {
        const string = hash.substring(1);
        const paramsInUrl = string.split('&');
        const splitup = paramsInUrl.reduce((accumulator,currentValue)=> {
            const [key,value] = currentValue.split('=');
            accumulator[key] = value;
            return accumulator;
        },{});
        return splitup;
    }

    useEffect(()=> {
        if(window.location.hash) {
            const {
                access_token,
            } = getAuthSpotify(window.location.hash);
            dispatch(token(access_token));
            dispatch(login())
            history.push('/create-playlist');
        }
    },[history])
    
    const fetchLogin = () => {
        window.location.replace(loginUrl);
    };

    return (
        <div className="container">
            {isLogin ? "" :  
                <button type="button" onClick={fetchLogin} className="button-login">
                    Login
                </button>
            }
        </div>
    )
};
