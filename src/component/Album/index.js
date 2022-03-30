
import SongImage from "../SongImage";
import AlbumTitle from "../AlbumTitle";

export default function Album({data}) {
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
                        key={key}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h5 style={{ color: "white", padding: 0, margin: 0 }}>
                            {value.album.name}
                        </h5>
                        <p style={{ color: "white", padding: 0, margin: 0 }}>
                            {value.artists[0].name}
                        </p>
                    </div>
                </div>
                    <button>Select</button>
                </div>
            );
        })}
        </>
    );
};
