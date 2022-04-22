export default function PlaylistItem({ src, name }) {
    return (
        <div className='inline-flex flex-col justify-center items-center'>
            <img src={src} className='w-40 h-40' />
            <p className='text-white font-medium text-xl pt-2'>{name}</p>
        </div>
    );
}