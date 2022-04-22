import Carousel from "react-multi-carousel";
import PlaylistItem from "../PlaylistItem";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        paritialVisibilityGutter: 60,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30,
    },
};

export default function PlaylistCarousel({ data }) {
    return (
        <Carousel ssr partialVisbile responsive={responsive} autoPlay>
            {data.map((value, key) => {
                return (
                    <PlaylistItem
                        src={
                            value.images.length > 0
                                ? value.images[0].url
                                : "https://placekitten.com/200/300"
                        }
                        name={value.name}
                        key={value.id}
                    />
                );
            })}
        </Carousel>
    );
}
