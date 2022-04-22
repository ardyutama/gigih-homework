import { render,screen,fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../component/SearchBar"

test("success search", ()=> {
    render(<SearchBar />)
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'),'tulus');
    expect(screen.getByRole('textbox')).toHaveValue('tulus');
})