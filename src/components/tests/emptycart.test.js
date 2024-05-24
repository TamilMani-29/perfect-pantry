import { render, screen } from "@testing-library/react";
import EmptyCart from "../EmptyCart";
import "@testing-library/jest-dom/extend-expect";

describe("test emptycart functionality", () => {
  test("empty cart text shows", () => {
    render(<EmptyCart option={"cart"} />);
    const emptyText = screen.getByTestId("empty-text");
    expect(emptyText).toHaveTextContent("Your cart");
  });

  test('empty cart image shows', ()=>{
    render(<EmptyCart option={"cart"}/>); 
    const emptyImg = screen.getByAltText('empty-cart-img'); 
    expect(emptyImg.getAttribute("src")).toBe("emptycart.png");
  })
});
