import axios from "axios";
import { useEffect, useState } from "react";
import SongImage from "../../component/SongImage";
import SearchBar from "../../component/SearchBar"
import FormPlaylist from "../../component/Form/Playlist";
const Home = () => {
    const [search,setSearch]= useState('');
    const [token,setToken]= useState("");
    const [data,setData] = useState([]);
    const [selected, setSelected] = useState([]);
    const spotify_id = 'z0q91831v12amzt71gejgovjt';

    useEffect(()=> {
        setToken(localStorage.getItem('accessToken'))
    },[]);
    const [form,setForm] = useState({
        name: '',
        description: '',
        collaborative : false,
        public: false,
    })
    const fetchData = async () => {
      axios.get(`https://api.spotify.com/v1/search`, {
          headers: {
              Authorization: `Bearer ${token}`,
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
        localStorage.clear();
        window.location = 'http://localhost:3000'
    }
  return (
    <>
      <div style={{display : "flex", flexDirection:"column",paddingTop: 48, paddingBottom: 48, gap:8}}>
        <SearchBar onChange={(e)=> setSearch(e.target.value)} onClick={fetchData}/>
        {selected.length > 0 && <FormPlaylist onChange={onChange} onSubmit={onSubmit}/>}
          <div style={{ display : "flex", flexDirection:"column", gap:4, paddingTop:16 }}>
            {data &&
              data.map((value,key)=> {
              return (
                  <div style={{ backgroundColor: "#2A2A2A", paddingRight: 16, borderRadius:8}}>
                    <div style={{display:"flex", gap:16,alignItems: "center",justifyContent:"space-between"}}>
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
                      </div>
                  </div>
              );
          })}
          </div>
        <div>
            <button onClick={onLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Home;
