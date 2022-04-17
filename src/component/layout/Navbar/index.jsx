import header from "../../../asset/img/header.svg"
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth-slice";
export default function NavBar(params) {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }
    return (
        <div className="max-w-full min-h-min bg-fixed px-12 py-5" style={{ backgroundImage: `url(${header})`}}>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src="./spotifyLogo.svg" className="w-10 h-10"></img>
                    <p className="text-2xl pl-4 text-white font-bold"> Spotify</p>
                    <a className="text-lg text-white pl-9">By ardyutama</a>
                    <img src="./github.svg" className="pl-2"></img>
                </div>  
                <button onClick={onLogout} className="bg-red-400 px-3 py-1 rounded block mt-4 text-white font-medium">Logout</button>
            </div>
        </div>
    )
};
