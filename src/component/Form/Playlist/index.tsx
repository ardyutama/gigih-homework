import React from "react"

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: React.FormEvent) => void,
}

export default function Form({onChange,onSubmit} : Props) {
    return (
        <form style={{ display:"inline-flex", flexDirection:"column", gap:4 }} onSubmit={onSubmit}>
            <label htmlFor="name">Title</label>
            <input id="name" onChange={onChange} minLength={10} className="border-2 rounded p-2 focus:border-green-300"/>
            <label htmlFor="description">Description</label>
            <input id="description" onChange={onChange} className="border-2 rounded p-2"/>
            <button type="submit" className="bg-yellow-300 p-1 rounded block mt-4 font-medium">Create playlist</button>
        </form>
    )
};
