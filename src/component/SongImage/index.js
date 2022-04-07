
export default function SongImage({src,height,width,albumName,artist,selected,isSelected}) {
    return (
        <div className="bg-gray-700 rounded-lg overflow-hidden pr-5">
            <div className="flex justify-between items-center gap-4">
                    <div style={{ display : "flex", alignItems:"center", gap: 16 }}>
                        <img
                            src={src}
                            height={height}
                            width={width}
                            alt="album cover"
                        />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h5 className="font-medium text-white">
                                {albumName}
                            </h5>
                            <p className="text-white font-normal">
                                {artist}
                            </p>
                        </div>
                    </div>
                <div className="inline-block">
                    <button onClick={selected} className="bg-green-600 px-2 text-white rounded-sm py-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"> { isSelected ? "Deselect" : "Select"} </button>
                </div>
            </div>
        </div>    
    );
};
