import { render, screen } from "@testing-library/react"
import SongImage from "../component/SongImage"

test('The Components are rendered', () => {
    render(
        <SongImage 
            src={"https://img.freepik.com/free-psd/logo-mockup-luxury-black-facade-sign_145275-288.jpg?w=2000"}
            albumName="albumName"
            artist="artist"
            alt={"album cover"}
        />
    )
    const images = screen.getByRole("img","https://img.freepik.com/free-psd/logo-mockup-luxury-black-facade-sign_145275-288.jpg?w=2000");
    const albumName = screen.getByText('albumName');
    const artistName = screen.getByText('artist');

    expect(images).toBeInTheDocument();
    expect(images).toHaveAttribute("src");
    expect(images).toHaveAttribute("alt");
    expect(albumName).toBeInTheDocument();
    expect(artistName).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
})