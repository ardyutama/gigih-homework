import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import SongImage from "../../component/SongImage";
import SearchBar from "../../component/SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ITrack } from "../../models/TrackResponse";
import NavBar from "../../component/layout/Navbar";
import { ISearch } from "../../models/searchResponse";
import { IMePlaylistResponse } from "../../models/MePlaylistResponse";
import Fab from "../../component/Fab";
import { useDisclosure } from "@chakra-ui/react";
import ModalForm from "../../component/Modal";
import PlaylistCarousel from "../../component/PlaylistSlider";
import { fetchSong } from "../../services/Spotify";
const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState<string>("");
    const [data, setData] = useState(Array<ITrack>());
    const [playlist, setPlaylist] = useState([]);
    const [selected, setSelected] = useState(Array<string>());
    const spotify_id = "z0q91831v12amzt71gejgovjt";
    const currentToken = useSelector((state: RootState) => state.token.value);
    const initialRef = React.useRef();
    const [form, setForm] = useState({
        name: "",
        description: "",
        collaborative: false,
        public: false,
    });
    // console.log(()=> fetchSong(currentToken,"tulus"));
    const fetchData = async () => {
        await axios
            .get<ISearch>(`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${currentToken}`,
                },
                params: {
                    q: `${search}`,
                    type: "track",
                },
            })
            .then((response: any) => {
                setData(response.data.tracks.items);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const fetchPlaylist = async (spotify_id: string) => {
        await axios
            .get<IMePlaylistResponse>(
                `https://api.spotify.com/v1/users/${spotify_id}/playlists`,
                {
                    headers: {
                        Authorization: `Bearer ${currentToken}`,
                    },
                },
            )
            .then((response: any) => {
                console.log(response.data.items);
                setPlaylist(response.data.items);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const createPlaylist = async () => {
        await axios
            .post(
                `https://api.spotify.com/v1/users/${spotify_id}/playlists`,
                form,
                {
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

    const addItems = (playlist_id: string) => {
        axios
            .post(
                `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
                { uris: selected, position: 0 },
                {
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
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createPlaylist();
        onClose();
    };
    useEffect(() => {
        fetchPlaylist(spotify_id);
    }, []);

    return (
        <div className='flex flex-col'>
            <NavBar />
            <div className='px-12 py-8 bg-gradient-to-b from-grey-spotify to-black-spotify min-h-screen '>
                <h4 className='text-4xl font-bold text-white'>Playlist</h4>
                <div className='pt-4'>
                    <PlaylistCarousel data={playlist} />
                </div>
                <div className='flex justify-between'>
                    
                    <SearchBar
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        onClick={fetchData}
                        //@ts-ignore
                        // onClick={()=> setData(fetchSong(currentToken, search))}
                            // setData(res.data.tracks.items);
                    />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {data &&
                        data.map((value, key: number) => {
                            return (
                                <SongImage
                                    src={value.album.images[0].url}
                                    albumName={value.album.name}
                                    artist={value.artists[0].name}
                                    isSelected={selected.includes(value.uri)}
                                    selected={(isSelected) =>
                                        isSelected
                                            ? setSelected((oldData) =>
                                                  oldData.filter(
                                                      (items) =>
                                                          items !== value.uri,
                                                  ),
                                              )
                                            : setSelected((oldData) => [
                                                  ...oldData,
                                                  value.uri,
                                              ])
                                    }
                                    key={key}
                                    data-testid='songImage'
                                />
                            );
                        })}
                </div>
                {selected.length > 0 && (
                    <Fab isOpen={"true"} onClick={onOpen} />
                )}
            </div>
            <ModalForm
                initialRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default Home;
