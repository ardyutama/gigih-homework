import { useEffect, useState } from "react";


export default function Login(params) {
    var client_id = process.env.REACT_APP_SPOTIFY_ID;
    var scope = 'playlist-modify-private';
    var redirect_uri = 'http://localhost:3000/callback';
    

    const fetchLogin = () => {
        window.location = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`;
      localStorage.setItem('isLogin',true);
    };
    const getAuthSpotify = (hash) => {
        const string = hash.substring(1);
        const paramsInUrl = string.split('&');
        const splitup = paramsInUrl.reduce((accumulator,currentValue)=> {
            const [key,value] = currentValue.split('=');
            accumulator[key] = value;
            return accumulator;
        },{});
        return splitup;
    }
    useEffect(()=> {
        if(window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type
            } = getAuthSpotify(window.location.hash);
        localStorage.clear();
        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('expiresIn', expires_in);
        localStorage.setItem('tokenType', token_type);
    }
    // setData(access_token);
  })
    return (
        <div>
            <button type="button" onClick={fetchLogin}>
                Login
            </button>
        </div>
    )
};
