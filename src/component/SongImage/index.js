
export default function SongImage({src,height,width,albumName,artist,selected,isSelected}) {
    return (
        <>
        <img
            src={src}
            height={height}
            width={width}
            alt="album cover"
        />
       <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 style={{ color: "white", padding: 0, margin: 0 }}>
                {albumName}
            </h5>
            <p style={{ color: "white", padding: 0, margin: 0 }}>
                {artist}
            </p>
        </div>
        <button onClick={selected}> { isSelected ? "Deselect" : "Select"} </button>
        </>    
    );
};
