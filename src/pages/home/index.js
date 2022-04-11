import axios from "axios";
import { useEffect, useState } from "react";
import SongImage from "../../component/SongImage";
import SearchBar from "../../component/SearchBar"
import { useDispatch } from "react-redux";
import FormPlaylist from "../../component/Form/Playlist";
import { token } from "../../store/token-slice"
import { useSelector } from "react-redux";
import { logout } from "../../store/auth-slice";

const Home = () => {
    const [search,setSearch]= useState('');
    const [data,setData] = useState([]);
    const [selected, setSelected] = useState([]);
    const spotify_id = 'z0q91831v12amzt71gejgovjt';
    const currentToken = useSelector((state)=> state.token.value);
    const dispatch = useDispatch();

    const getAuthSpotify = (hash) => {
        const string = hash.substring(1);
        const paramsInUrl = string.split('&');
        const splitup = paramsInUrl.reduce((accumulator,currentValue)=> {
            const [key,value] = currentValue.split('=');
            console.log(value);
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
    }
  })
    const [form,setForm] = useState({
        name: '',
        description: '',
        collaborative : false,
        public: false,
    })
    
    const fetchData = async () => {
      axios.get(`https://api.spotify.com/v1/search`, {
          headers: {
              Authorization: `Bearer ${currentToken}`,
          },
          params : {
            q: `${search}`,
            type: "track"
          }
        })
        .then((response) => {
          console.log(response.data.tracks.items);
          setData(response.data.tracks.items);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const createPlaylist = () => {
        axios.post(`https://api.spotify.com/v1/users/${spotify_id}/playlists`,
        form,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
          }
        }).then ((res)=> {
            console.log(res.data);
            addItems(res.data.id);
        })
    }
    
    const addItems = (playlist_id) => {
        axios.post(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
        {"uris" : selected, "position" : 0},
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
          }
        }).then ((res)=> {
            console.log(res.data);
        })
    }
    const onChange = (e) => {
        const {id,value} = e.target;
        setForm({...form,[id]: value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        createPlaylist();
    }
    const onLogout = () => {
        dispatch(logout());
        // <Redirect to="/" />
    }
      return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div style={{display : "flex", flexDirection:"column",paddingTop: 48, paddingBottom: 48, gap:8}}>
              <SearchBar onChange={(e)=> setSearch(e.target.value)} onClick={fetchData}/>
                  {selected.length > 0 && <FormPlaylist onChange={onChange} onSubmit={onSubmit}/>}
						<div className="flex flex-col gap-4 pt-4">
						{data &&
							data.map((value,key)=> {
							return (
								<SongImage
									src={value.album.images[2].url}
									height={value.album.images.height}
									width={value.album.images.width}
									albumName = {value.album.name}
									artist = {value.artists[0].name}
									isSelected = {selected.includes(value.uri)}
									selected = {()=> setSelected(oldData => [...oldData, value.uri])}
									key={key}
								/>
							);
						})}
					</div>
                  <button onClick={onLogout} className="bg-red-400 px-3 py-1 rounded block">Logout</button>
            </div>
          </div>
      );
};

export default Home;
