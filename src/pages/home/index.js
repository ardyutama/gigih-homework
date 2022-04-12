import axios from "axios";
import {  useState } from "react";
import SongImage from "../../component/SongImage";
import SearchBar from "../../component/SearchBar"
import { useDispatch } from "react-redux";
import FormPlaylist from "../../component/Form/Playlist";
import { token } from "../../store/token-slice"
import { useSelector } from "react-redux";
import { logout } from "../../store/auth-slice";
import "../../styles.css"
const Home = () => {
    const [search,setSearch]= useState('');
    const [data,setData] = useState([]);
    const [selected, setSelected] = useState([]);
    const spotify_id = 'z0q91831v12amzt71gejgovjt';
    const currentToken = useSelector((state)=> state.token.value);
    const dispatch = useDispatch();

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
    }
      return (
		<div className="container-content">
            <h4 className="title">Playlist</h4>
              <SearchBar onChange={(e)=> setSearch(e.target.value)} onClick={fetchData}/>
                  {selected.length > 0 && <FormPlaylist onChange={onChange} onSubmit={onSubmit}/>}
                    <div className="song-container">
						{data && data.map((value,key)=> {
							return (
								<SongImage
									src={value.album.images[1].url}
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
      );
};

export default Home;
