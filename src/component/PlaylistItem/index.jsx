export default function PlaylistItem({ src, name }) {
    return (
        <div className='inline-flex flex-col justify-center shrink-0 w-40'>
            <img src={src} className='w-40 h-40' alt="Playlist"/>
            <p className='text-white font-medium text-sm pt-2 text-center'>{name}</p>
        </div>
    );
}