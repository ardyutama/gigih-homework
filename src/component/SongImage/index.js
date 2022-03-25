
export default function SongImage({src,height,width}) {
    return (
        <img
            src={src}
            height={height}
            width={width}
            alt="album cover"
        />
    );
};
