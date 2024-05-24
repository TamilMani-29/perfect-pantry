import "@testing-library/jest-dom/extend-expect";
import FavouritesBar from "../FavouritesBar";

const { render, screen } = require("@testing-library/react");

describe("test favBar functionality", () => {
  test("favourite option renders correctly", () => {
    render(<FavouritesBar />);
    const cartOption = screen.getByRole("link", { name: "favourite-option" });
    expect(cartOption).toBeInTheDocument();
  });

  test("favourite icon image is shown", () => {
    render(<FavouritesBar />);
    const cartImg = screen.getByAltText("favourite-option");
    expect(cartImg).toBeInTheDocument();
  });
});
