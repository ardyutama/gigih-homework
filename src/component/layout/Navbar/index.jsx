import header from "../../../asset/img/header.svg"
import Profile from "../../Profile";
export default function NavBar(params) {
    return (
        <div className="max-w-full min-h-min bg-fixed px-12 py-5" style={{ backgroundImage: `url(${header})`}}>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="./spotifyLogo.svg" className="w-10 h-10"></img>
                    <p className="text-2xl pl-4 text-white font-bold"> Spotify</p>
                    <a className="text-lg text-white pl-9">By ardyutama</a>
                    <img src="./github.svg" className="pl-2"></img>
                </div> 
                <div className="flex items-center">
                    <Profile />
                </div> 
            </div>
        </div>
    )
};
