
export default function SongImage({src,height,width,albumName,artist,selected,isSelected}) {
    return (
        <div className="song-wrapper">
            <div className="song-content">
                <img
                    src={src}
                    // height={height}
                    // width={width}
                    alt="album cover"
                />
                <div className="song-action">
                    <div className="song-title">
                        <h5 className="font-medium text-white">
                            {albumName}
                        </h5>
                        <p className="text-white font-normal">
                            {artist}
                        </p>
                    </div>
                    <button onClick={selected} > { isSelected ? "Deselect" : "Select"} </button>
                </div>
            </div>
            <div className="inline-block">
            </div>
        </div>
    );
};
