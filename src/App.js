import Album from "./component/Album";
import data from "./component/constant/data";

export default function App() {
    return (
        <div style={{ height:"100%",  backgroundColor: "#121212"}}>
            <div
                style={{  paddingTop: 24, paddingLeft:48, display:"inline-flex", flexDirection:"column", gap:24, paddingBottom:48 }}
            >
                <Album data={data} />
            </div>
        </div>
    );
}
