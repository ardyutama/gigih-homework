import SongImage from "../SongImage"

export default function PlaylistItem({data,selected,setSelected}) {
    return (
        <>
        {data.map((value ,key) => {
            return(
                <SongImage
                    src={value.album.images[0].url}
                    albumName = {value.album.name}
                    artist = {value.artists[0].name}
                    isSelected = {selected.includes(value.uri)}
                    selected = {isSelected => isSelected ? setSelected(oldData => oldData.filter(items => items !== value.uri)) : setSelected(oldData => [...oldData, value.uri])}
                    key={key}
                />
        )})
        }</>
    )
}
