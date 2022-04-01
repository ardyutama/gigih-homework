
import SongImage from "../SongImage";
import { useState } from "react";

export default function Album({data}) {
    const [selected, setSelected] = useState([]);
    console.log(selected);
    const isSelected = (value) => {
        selected.includes(value.uri)
    }
    console.log(data);
    return (
        <>
        {data &&
            data.map((value,key)=> {
            return (
                <div
                    style={{
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
                            select = {value.includes(value.uri)}
                            isSelected = {setSelected(isSelected(value))}
                            key={key}
                        />
                    </div>
                </div>
            );
        })}
        </>
    );
};
