import axios from "axios";
import { useState } from "react";

const SearchAPI = async (search,currentToken) =>{
    // const [data,setData] = useState([]);
    let data;
    await axios.get(`https://api.spotify.com/v1/search`,{
        headers: {
              Authorization: `Bearer ${currentToken}`,
          },
          params : {
            q: `${search}`,
            type: "track"
          }
        })
        .then((response) => {
            data = response;
        })
        .catch((error) => {
          console.log(error);
        });
        return data   
};

export default SearchAPI;