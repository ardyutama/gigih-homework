import Album from "./component/Album";
import data from "./data";
export default function App() {
    return (
        <div className="App">
            <div style={{ textAlign:"center", marginBottom:48, marginTop:24 }}>
                <Album data={data}/>
                <button>Select</button>
            </div>
        </div>
    );
}
