import React from 'react'
import cartImg from "../assets/general-images/shopping-cart.png";
const CartBar = () => {
  return (
    <div className="cart">
      <a href="/cart">
        <img
          id="cart-img"
          className="cart-img"
          src={cartImg}
          alt="cart-option"
        />
      </a>
    </div>
  );
}

export default CartBar