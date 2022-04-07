export default function index({onChange,onClick}) {
    return (
        <div className="w-auto justify-between flex">
            <input onChange={onChange} className="border-gray-300 rounded-md border-2 px-2 py-2 w-full"/>
            <button type="text" onClick={onClick} className="mx-2 px-3 py-2 bg-green-600 text-white rounded-md">Search</button>
        </div>
    );
};
