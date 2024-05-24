import React from 'react'
import emptyCartImg from '../assets/general-images/emptycart.png'
const EmptyCart = ({option}) => {
  return (
    <div className="cart-empty-container">
      <div className="cart-empty-text" data-testid='empty-text'>
        Your {option} seems to be Empty
      </div>
      <div className="cart-empty-img">
        <img
          className="empty-background"
          src={emptyCartImg}
          alt="empty-cart-img"
        />
      </div>
    </div>
  );
}

export default EmptyCart