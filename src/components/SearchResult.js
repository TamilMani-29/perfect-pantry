import PantryItemCard from "./PantryItemCard";
import { useEffect, useState } from "react";

const SearchResult = ({
  pantrySelection,
  setPantrySelection,
  searchResultArr,
}) => {
  const storedCartItems =
    JSON.parse(localStorage.getItem("cartItems")) !== null
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  const storedFavItems =
    JSON.parse(localStorage.getItem("favItems")) !== null
      ? JSON.parse(localStorage.getItem("favItems"))
      : [];
  const [cartItems, setCartItems] = useState(storedCartItems);

  const [favItems, setFavItems] = useState(storedFavItems);

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.localStorage.setItem("favItems", JSON.stringify(favItems));
    console.log("ci", cartItems);
    console.log("ci", favItems);
  }, [cartItems, favItems]);

  return (
    <>
      <div className="pantry-items">
        <div id="pantry-items-carousel" className="pantry-items-carousel">
          {searchResultArr.length > 0 &&
            searchResultArr.map((result) => (
              <PantryItemCard
                key={Date.now() + result[0] + Math.random(0) * 10}
                itemDetails={result[0]}
                currCategory={result[1]}
                cartItems={cartItems}
                setCartItems={setCartItems}
                favItems={favItems}
                setFavItems={setFavItems}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
