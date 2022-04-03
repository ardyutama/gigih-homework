export default function index({onChange,onClick}) {
    return (
        <div style={{ display: "flex", gap: 4}}>
            <input onChange={onChange}/>
            <button type="text" onClick={onClick}>Search</button>
        </div>
    );
};
