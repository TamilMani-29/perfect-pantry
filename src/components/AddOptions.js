import React, { useEffect } from "react";
import favouriteIcon from "../assets/general-images/favourite.png";
import redFavouriteIcon from "../assets/general-images/lover.png";
import { useState } from "react";
import "reactjs-popup/dist/index.css";

const AddOptions = ({
  addProductToCart,
  addProductToFavourites,
  removeProductFromFavourites,
  favItems,
  productName,
  quantity,
  setQuantity
}) => {
  const [addedToFav, setAddedToFav] = useState(false);
  useEffect(() => {
    favItems.includes(productName) ? setAddedToFav(true) : setAddedToFav(false);
  }, [productName]);

  return (
    <div className="add-options">
      <div className="add-to-cart">
        <button onClick={addProductToCart} className="cart-add">
          Add to Cart
        </button>
      </div>

      <div className="favorite">
        <img
          onClick={
            !addedToFav ? addProductToFavourites : removeProductFromFavourites
          }
          className="fav-img"
          src={!addedToFav ? favouriteIcon : redFavouriteIcon}
          alt="favourite-img"
        />
      </div>
    </div>
  );
};

export default AddOptions;
