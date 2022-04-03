export default function Form({onChange,onSubmit}) {
    return (
        <form style={{ display:"inline-flex", flexDirection:"column", gap:4 }} onSubmit={onSubmit}>
            <label htmlFor="name">Title</label>
            <input id="name" onChange={onChange} minLength="10"/>
            <label htmlFor="description">Description</label>
            <input id="description" onChange={onChange}/>
            <button type="submit">Create playlist</button>
        </form>
    )
};
