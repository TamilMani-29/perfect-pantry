import React from "react";
import CartPageTitle from "./CartPageTitle";
import { useState, useEffect } from "react";
import CartProduct from "./CartProduct";
import BuySuccess from "./BuySuccess";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  let storedCartItems =
    JSON.parse(localStorage.getItem("cartItems")) !== null
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  let filteredItems = storedCartItems.filter((item) => {
    return item !== null;
  });
  const [cartItems, setCartItems] = useState(filteredItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [buySuccess, setBuySuccess] = useState(false);

  function handleBuy() {
    localStorage.removeItem("cartItems");
    setCartItems([]);
    setBuySuccess(true);
  }

  function handleClose() {
    setBuySuccess(false);
  }

  function removeProductFromCart(product){
    console.log('coming inside removeproduct');
    setCartItems((curr) => curr.filter((item) => item.productName !== product.productName));
    setTotalPrice((currPrice) => currPrice - (2 * parseInt(product.productPrice)));
  }
  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("cart items inside cart page", cartItems);
    
  }, [cartItems]);

  return (
    <div className="cart-container">
      {cartItems.length === 0 && <EmptyCart option='Cart'/>}
      {buySuccess && <BuySuccess handleClose={handleClose} />}
      {cartItems.length > 0 && (
        <>
          <CartPageTitle />
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartProduct
                item={item}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                removeProductFromCart={removeProductFromCart}
                cartItems={cartItems}
              />
            ))}
          </div>

          <div className="total-container">
            <div className="total-title">Total</div>
            <div className="total-value">{totalPrice / 2}</div>
            <div className="buy-option">
              <button className="buy-btn" onClick={handleBuy}>
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
