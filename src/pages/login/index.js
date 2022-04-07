import { useHistory } from "react-router-dom";

export default function Login({login}) {
    var client_id = process.env.REACT_APP_SPOTIFY_ID;
    var scope = 'playlist-modify-private';
    var redirect_uri = 'http://localhost:3000/create-playlist';
    let history = useHistory();

    const fetchLogin = () => {
        window.location = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`;
        localStorage.setItem('isLogin',true);
        history.push('/create-playlist');
    };

    return (
        <div className="min-h-screen flex text-center items-center">
            <div className="container mx-auto">
                {login ? "" :  
                    <button type="button" onClick={fetchLogin} className="px-3 py-2 bg-green-600 text-white rounded-md">
                        Login
                    </button>
                }
                </div>
        </div>
    )
};
