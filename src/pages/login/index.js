import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUrl } from "../../utils/spotifyAuth";
import { login } from "../../store/auth-slice";
export default function Login() {
    const dispatch = useDispatch();
    let history = useHistory();
    const isLogin = useSelector(state => state.auth.isLogin)
    const fetchLogin = () => {
        window.location.replace(loginUrl);
        dispatch(login())
        history.push('/create-playlist');
    };

    return (
        <div className="min-h-screen flex text-center items-center">
            <div className="container mx-auto">
                {isLogin ? "" :  
                    <button type="button" onClick={fetchLogin} className="px-3 py-2 bg-green-600 text-white rounded-md">
                        Login
                    </button>
                }
                </div>
        </div>
    )
};
