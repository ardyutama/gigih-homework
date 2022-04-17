import axios from "axios";
import React, {  useState } from "react";
import SongImage from "../../component/SongImage";
import SearchBar from "../../component/SearchBar"
import { useDispatch } from "react-redux";
import FormPlaylist from "../../component/Form/Playlist";
import { token } from "../../store/token-slice"
import { useSelector } from "react-redux";
import { logout } from "../../store/auth-slice";
import { RootState } from "../../store/store";
import {ITrack} from "../../models/TrackResponse";
import NavBar from "../../component/layout/Navbar";
import PlaylistItem from "../../component/PlaylistItem"
import { ISearch } from "../../models/searchResponse";
const Home = () => {
    const [search,setSearch]= useState<string>('');
    const [data,setData] = useState(Array<ITrack>());
    const [selected, setSelected] = useState(Array<string>());
    const spotify_id = 'z0q91831v12amzt71gejgovjt';
    const currentToken = useSelector((state: RootState)=> state.token.value);
    const dispatch = useDispatch();

    const [form,setForm]= useState({
        name: '',
        description: '',
        collaborative : false,
        public: false,
    })
    
    const fetchData = async () => {
      axios.get<ISearch>(`https://api.spotify.com/v1/search`, {
          headers: {
              Authorization: `Bearer ${currentToken}`,
          },
          params : {
            q: `${search}`,
            type: "track"
          }
        })
        .then((response: any) => {
          setData(response.data.tracks.items);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const createPlaylist= async () => {
        await axios.post(`https://api.spotify.com/v1/users/${spotify_id}/playlists`,
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
    
    const addItems = (playlist_id : string) => {
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
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id,value} = e.target;
        setForm({...form,[id]: value })
    }
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createPlaylist();
    }
      return (
		<div className="flex flex-col">
			<NavBar />
			    <div className="px-12 py-8 bg-gradient-to-b from-grey-spotify to-black-spotify min-h-screen">
				<h4 className="text-4xl font-bold text-white">Playlist</h4>
					<SearchBar onChange={(e)=> setSearch(e.target.value)} onClick={fetchData}/>
						{selected.length > 0 && <FormPlaylist onChange={onChange} onSubmit={onSubmit}/>}
						<div className="grid grid-cols-2 gap-6">
							{data && data.map((value ,key:number) => {
								return (
									<SongImage
										src={value.album.images[0].url}
										albumName = {value.album.name}
										artist = {value.artists[0].name}
										isSelected = {selected.includes(value.uri)}
										selected = {isSelected => isSelected ? setSelected(oldData => oldData.filter(items => items !== value.uri)) : setSelected(oldData => [...oldData, value.uri])}
										key={key}
									/>
								);
							})}
						</div>
			    </div>
		</div>
      );
};

export default Home;
