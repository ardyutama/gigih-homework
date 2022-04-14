export default function index({onChange,onClick}) {
    return (
        <div className="flex pr-5 py-6">
            <input onChange={onChange} placeholder="Search Song" type="text" className="px-4 rounded-lg inline-flex"/>
            <button type="text" onClick={onClick} className="mx-2 px-3 py-2 bg-green-spotify text-white rounded-md text-lg font-semibold">Search</button>
        </div>
    );
};
