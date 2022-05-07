import React, { useEffect, useState } from "react";
import SongImage from "../../component/SongImage";
import SearchBar from "../../component/SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ITrack } from "../../models/TrackResponse";
import NavBar from "../../component/layout/Navbar";
import PlaylistItem from "../../component/PlaylistItem";
import { IAllPLaylist } from "../../models/AllPlaylistResponse";
import Fab from "../../component/Fab";
import { useDisclosure } from "@chakra-ui/react";
import ModalForm from "../../component/Modal";
import {
    fetchSong,
    fetchPlaylist,
    createPlaylist,
    addItems,
} from "../../services/Spotify";
const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState<string>("");
    const [tracks, setTracks] = useState(Array<ITrack>());
    const [playlist, setPlaylist] = useState(Array<IAllPLaylist>());
    const [selected, setSelected] = useState(Array<string>());
    const user_id = useSelector((state: RootState) => state.user.value);
    const currentToken = useSelector((state: RootState) => state.token.value);
    const initialRef = React.useRef();
    const [form, setForm] = useState({
        name: "",
        description: "",
        collaborative: false,
        public: false,
    });
    const handleTracks = async () => {
        let res = await fetchSong(currentToken, search);
        return setTracks(res?.data.tracks.items);
    };
    const handlePlaylist = async () => {
        let res = await fetchPlaylist(user_id, currentToken);
        //@ts-ignores
        return setPlaylist(res.data.items);
    };
    const handleCreatePlaylist = async () => {
        let res = await createPlaylist(user_id, form, currentToken);
        return handleAddItems(res?.data.id);
    };

    const handleAddItems = (playlist_id: string) => {
        return addItems(playlist_id, selected, currentToken);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCreatePlaylist();
        onClose();
    };

    useEffect(() => {
        handlePlaylist();
    }, [handleAddItems]);

    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="px-12 py-8 bg-gradient-to-b from-grey-spotify to-black-spotify min-h-screen ">
                <h4 className="text-4xl font-bold text-white">Playlist</h4>
                <div className="py-4 overflow-x-auto flex gap-4 items-start">
                    {playlist.map((value, key) => {
                        return (
                            <PlaylistItem
                                src={
                                    value.images.length > 0
                                        ? value.images[0].url
                                        : "https://placekitten.com/200/300"
                                }
                                name={value.name}
                                key={value.id}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-between">
                    <SearchBar
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSearch(e.target.value)
                        }
                        onClick={handleTracks}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {tracks &&
                        tracks.map((value, key: number) => {
                            return (
                                <SongImage
                                    src={value.album.images[0].url}
                                    albumName={value.album.name}
                                    artist={value.artists[0].name}
                                    isSelected={selected.includes(value.uri)}
                                    selected={(isSelected) =>
                                        isSelected
                                            ? setSelected((oldData) =>
                                                oldData.filter((items) => items !== value.uri)
                                            )
                                            : setSelected((oldData) => [...oldData, value.uri])
                                    }
                                    key={key}
                                    data-testid="songImage"
                                />
                            );
                        })}
                </div>
                {selected.length > 0 && <Fab isOpen={"true"} onClick={onOpen} />}
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
