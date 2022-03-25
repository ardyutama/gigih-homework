
import SongImage from "../SongImage";
import AlbumTitle from "../AlbumTitle";

export default function Album({data}) {
    return (
        <>
            <div style={{ display:"inline-flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                {data.album.images.map((data, key) => {
                    return (
                        <SongImage
                            src={data.url}
                            height={data.height}
                            width={data.width}
                        />
                    );
                })}
            </div>
            <AlbumTitle title={data.album.name} />
                {data.artists.map((data, key) => {
                    return <p>{data.name}</p>;
            })}
        </>
    );
};
