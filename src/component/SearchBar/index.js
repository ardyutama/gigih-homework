export default function index({onChange,onClick}) {
    return (
        <div className="searchbar">
            <input onChange={onChange} placeholder="Search Song" type="text"/>
            <button type="text" onClick={onClick} className="mx-2 px-3 py-2 bg-green-600 text-white rounded-md">Search</button>
        </div>
    );
};
