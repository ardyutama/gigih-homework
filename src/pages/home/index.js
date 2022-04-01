import axios from "axios";
import { useEffect, useState } from "react";
import Album from "../../component/Album";
import SongImage
 from "../../component/SongImage";
const Home = () => {
  const [search,setSearch]= useState('');
  const [token,setToken]= useState("");
  const [data,setData] = useState([]);
  const [selected, setSelected] = useState([]);
  console.log(selected);
  console.log(token)
  useEffect(()=> {
      setToken(localStorage.getItem('accessToken'))
  },[]);
  
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
  return (
    <>
      <div style={{display : "inline-block"}}>
        <input
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
        <button type="button" onClick={fetchData}>
          search
        </button>
      </div>
      <div>
          {data &&
            data.map((value,key)=> {
            return (
                <div style={{
                        display: "flex",
                        gap: 48,
                        alignItems: "center",
                        backgroundColor: "#2A2A2A",
                        paddingRight: 16,
                        borderRadius: 8,
                        justifyContent:"space-between",
                    }}
                >
                <div style={{display:"flex", gap:16,alignItems: "center",}}>
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
          <button onClick={()=> localStorage.clear()}>Logout</button>
        </div>
    </>
  );
};

export default Home;
