import { render, screen } from "@testing-library/react";
import SearchBar from "../SearchBar";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("tests searchbar functionality", () => {
  test("searchbar renders correctly", () => {
    render(
      <SearchBar
        pantrySelection={"fruits"}
        pantryStock={["apple", "orange", "banana"]}
        isSearching={true}
      />
    );
    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
  });
  test("input box allows input to be typed", () => {
    userEvent.setup();
    render(
      <SearchBar
        pantrySelection={"apple"}
        pantryStock={["apple", "orange", "banana"]}
        isSearching={true}
      />
    ); 
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, 'apple'); 
    expect(inputElement).toHaveValue('apple');
  });
});
