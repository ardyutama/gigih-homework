var redirect_uri = process.env.REACT_APP_REDIRECT_URL;
var client_id = process.env.REACT_APP_SPOTIFY_ID;
var scope = ['playlist-modify-private','playlist-read-private','playlist-read-collaborative'];
export const authEndpoint = 'https://accounts.spotify.com/authorize'
export const loginUrl = `${authEndpoint}?
client_id=${client_id}
&redirect_uri=${redirect_uri}
&scope=${scope}
&response_type=token
&show_dialog=true`;

