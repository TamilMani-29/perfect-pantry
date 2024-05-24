import { useEffect } from "react";

const CartProduct = ({ item, totalPrice, setTotalPrice, removeProductFromCart, cartItems}) => {
  useEffect(() => {
    console.log("the total price is", totalPrice, parseInt(item.productPrice));
    setTotalPrice((currPrice) => currPrice + parseInt(item.productPrice));
    console.log(item);
  }, [item.productPrice]);

  return (
    <div className="cart-item">
      <div className="product-name">{item.productName}</div>
      <div className="quantity">1</div>
      <div className="price">{item.productPrice}</div>
      <span title="Remove from Cart" class="close-remove" onClick={()=> removeProductFromCart(item)}>
        &times;
      </span>
    </div>
  );
};

export default CartProduct;
