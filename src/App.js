import "./styles.css";
import data from "./data";
export default function App() {
    return (
        <div className="App">
            <img
                src={data.album.images[0].url}
                height={data.album.images[0].height}
                width={data.album.images[0].width}
                // width="640"
                alt="cover album"
            />
            <h4>{data.album.name} </h4>
            <p>{data.artists[0].name}</p>
            <button>Select</button>
        </div>
    );
}
