import { getByRole, render, screen } from "@testing-library/react";
import AddOptions from "../AddOptions";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

const items = [];

const addProductToCart = jest.fn();
const addProductToFavourites = jest.fn((product)=> items.push(product));
const removeProductFromFavourites = jest.fn();

describe("test add options functionality", () => {
  test("add to cart button renders correctly", () => {
    render(
      <AddOptions
        addProductToCart={addProductToCart}
        addProductToFavourites={addProductToFavourites}
        removeProductFromFavourites={removeProductFromFavourites}
        favItems={[]}
        productName={"apple"}
      />
    );
    const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });
    expect(addToCartBtn).toBeInTheDocument();
  });

  test("add to fav img functionality test", async () => {
    user.setup();

    render(
      <AddOptions
        addProductToCart={addProductToCart}
        addProductToFavourites={addProductToFavourites}
        removeProductFromFavourites={removeProductFromFavourites}
        favItems={[]}
        productName={"apple"}
      />
    );
    const favImg = screen.getByAltText("favourite-img");
    expect(favImg.getAttribute("src")).toBe("favourite.png");
    await user.click(favImg);
    expect(addProductToFavourites).toHaveBeenCalledTimes(1);
  });

  test('test add to cart functionalitiy', async ()=>{
    user.setup();
        render(
          <AddOptions
            addProductToCart={addProductToCart}
            addProductToFavourites={addProductToFavourites}
            removeProductFromFavourites={removeProductFromFavourites}
            favItems={[]}
            productName={"apple"}
          />
        ); 
        const addToCartBtn = screen.getByRole('button', {name: 'Add to Cart'}); 
        await user.click(addToCartBtn); 
        expect(addProductToCart).toHaveBeenCalledTimes(1); 
  });
});
