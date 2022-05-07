import axios from "axios";

const fetchSong = async (currentToken, search) => {
  try {
    const request = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
      params: {
        q: `${search}`,
        type: "track",
      },
    });
    return request;
  } catch (error) {
    console.log(error);
  }
};

const fetchPlaylist = async (spotify_id, currentToken) => {
  const request = await axios
    .get(`https://api.spotify.com/v1/users/${spotify_id}/playlists`, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  return request;
};

const createPlaylist = async (spotify_id, form, currentToken) => {
  const request = await axios
    .post(`https://api.spotify.com/v1/users/${spotify_id}/playlists`, form, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
        "Content-Type": "application/json",
      },
    })
    .catch((error) => {
      console.log(error);
    });
  return request;
};

const addItems = (playlist_id, selected, currentToken) => {
  axios
    .post(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        uris: selected,
        position: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${currentToken}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    });
};

export { addItems, createPlaylist, fetchSong, fetchPlaylist };
