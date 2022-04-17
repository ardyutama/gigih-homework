import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUrl } from "../../utils/spotifyAuth";
import { login } from "../../store/auth-slice";
import { token } from "../../store/token-slice"
import { useEffect } from "react";
import { RootState } from "../../store/store";


export default function Login() {
    const dispatch = useDispatch();
    let history = useHistory();
    const isLogin = useSelector((state) => state.auth.isLogin);
    
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
            const { access_token } = getAuthSpotify(window.location.hash);
            dispatch(token(access_token));
            dispatch(login())
            history.push('/create-playlist');
        }
    },[history])
    
    const fetchLogin = () => {
        window.location.replace(loginUrl);
    };

    return (
        <div className="min-h-screen flex flex-col px-8 py-6 bg-gradient-to-b from-grey-spotify to-black-spotify items-center justify-center">
            {isLogin ? "" :  
                <button type="button" onClick={fetchLogin} className="px-6 py-3 bg-green-spotify text-white rounded-2xl font-bold text-xl inline-block">
                    Login
                </button>
            }
        </div>
    )
};
