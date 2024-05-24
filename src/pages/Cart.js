import React from "react";
import "../styles/cart.css";
import AppDetails from "../components/AppDetails.js";
import HomeButton from "../components/HomeButton.js";
import FavouritesBar from "../components/FavouritesBar";
import CartContainer from "../components/CartContainer";

const Cart = () => {
  return (
    <div className="homepage">
      <div className="left-options">
        <AppDetails />
        <HomeButton />
      </div>
      <div className="display-container">
        <div className="options-tab">
          <div className="cart-title">Your Cart</div>
          <FavouritesBar />
        </div>
        <CartContainer />
      </div>
    </div>
  );
};

export default Cart;
