type Props = {
    src: string,
    albumName: string,
    artist: string,
    isSelected: boolean,
    selected: (isSelected: boolean) => void,
}


export default function SongImage({src,albumName,artist,selected,isSelected} : Props) {
    return (
        <div className="border-4 rounded-md border-gray-500 p-4 flex w-auto">
            <div className="flex">
                <img
                    src={src}
                    // height={height}
                    alt="album cover"
                    className="bg-contain w-32 h-32"
                />
                <div className="flex flex-col justify-between pl-4 gap-4">
                    <div>
                        <h5 className="font-bold text-white text-xl">
                            {albumName}
                        </h5>
                        <p className="text-white font-normal">
                            {artist}
                        </p>
                    </div>
                    <div>
                        <button onClick={()=> selected(isSelected)} className="px-3 py-2 bg-green-spotify text-white rounded-md text-lg font-semibold inline-block"> { isSelected ? "Deselect" : "Select"} </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
