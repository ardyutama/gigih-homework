import axios from "axios";

const fetchSong = async (currentToken,search) => {
     await axios
        .get (`https://api.spotify.com/v1/search`, {
            headers: {
                Authorization: `Bearer ${currentToken}`,
            },
            params: {
                q: `${search}`,
                type: "track",
            },
        }).then((response)=>{
            console.log(response.data.tracks.items)
            return response.data.tracks.items;
        })
        .catch((error) => {
            console.log(error);
        });
        // console.log(data.data.tracks.items)
        // return data.data.tracks.items
};

const fetchPlaylist = async (spotify_id,currentToken) => {
    await axios
        .get (
            `https://api.spotify.com/v1/users/${spotify_id}/playlists`, {
                headers: {
                    Authorization: `Bearer ${currentToken}`,
                },
            },
        )
        .then((response) => {
            console.log(response.data.items);
            return (response.data.items);
        })
        .catch((error) => {
            console.log(error);
        });
}

const createPlaylist = async (spotify_id,form,currentToken) => {
    await axios
        .post(
            `https://api.spotify.com/v1/users/${spotify_id}/playlists`,
            form, {
                headers: {
                    Authorization: `Bearer ${currentToken}`,
                    "Content-Type": "application/json",
                },
            },
        )
        .then((res) => {
            console.log(res.data);
            addItems(res.data.id);
        });
};

const addItems = (playlist_id,selected,currentToken) => {
    axios
        .post(
            `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
                uris: selected,
                position: 0
            }, {
                headers: {
                    Authorization: `Bearer ${currentToken}`,
                    "Content-Type": "application/json",
                },
            },
        )
        .then((res) => {
            console.log(res.data);
        });
};

export {addItems,createPlaylist,fetchSong,fetchPlaylist}
