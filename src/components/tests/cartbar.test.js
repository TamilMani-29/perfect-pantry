import "@testing-library/jest-dom/extend-expect";
import CartBar from "../CartBar";
import user from '@testing-library/user-event';

const { render, screen } = require("@testing-library/react");

describe("test cartbar functionality", () => {
  test("cart option renders correctly", () => {
    render(<CartBar />);
    const cartOption = screen.getByRole("link", { name: "cart-option" });
    expect(cartOption).toBeInTheDocument();
  });

  test("cart image is shown", () => {
    render(<CartBar />);
    const cartImg = screen.getByAltText("cart-option");
    expect(cartImg).toBeInTheDocument();
  }); 

  test('cart option redirects correctly', ()=>{
    user.setup();
    render(<CartBar />) 
    const cartLink = screen.getByRole("img", { name: /cart\-option/i }); 
    await user.click(c)
  })
});
