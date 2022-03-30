import axios from "axios";
import { useEffect, useState } from "react";
import Album from "../../component/Album";

const Home = () => {
  const [search,setSearch]= useState('');
  const [token,setToken]= useState("");
  const [data,setData] = useState([]);
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
          console.log(response);
          setData(response.data.tracks.items);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div>
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
          <Album data={data}/>
      </div>
      <div>
        <button onClick={()=> localStorage.clear()}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
