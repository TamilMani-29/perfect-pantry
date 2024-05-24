import AddOptions from "./AddOptions";
import { useEffect } from "react";
const PantryItemCard = ({
  itemDetails,
  currCategory,
  cartItems,
  setCartItems,
  favItems,
  setFavItems,
  quantity,
  setQuantity
}) => {
  const itemDetail = Object.values(itemDetails);
  console.log(cartItems);
  function addProductToCart() {
    console.log("coming inside addtocart");
    setCartItems((current) => [
      ...current,
      { productName: itemDetail[0], productPrice: parseInt(itemDetail[3]) },
    ]);
    console.log(cartItems);
  }

  function addProductToFavourites() {
    setFavItems((currFav) => [...currFav, itemDetail[0]]);
    console.log(favItems);
  }
  function removeProductFromFavourites() {
    setFavItems((currFav) => currFav.filter((item) => item !== itemDetail[0]));
    console.log("reduced favs are ", favItems);
  }
  useEffect(() => {
    window.localStorage.setItem("favItems", JSON.stringify(favItems));
  }, [favItems]);
  return (
    <div className="grocery-card">
      <div className="grocery-img">
        <img
          className="img-item"
          src={require(`../assets/groceries/${currCategory}/${itemDetail[0]}.jpg`)}
          alt={itemDetails.name + "img"}
        />
        <div className="grocery-name">{itemDetail[0]}</div>
        <div className="count-price">
          {`${itemDetail[1]} KG left`} | {`Rs. ${itemDetail[3]}/KG`}
        </div>
        <AddOptions
          addProductToCart={addProductToCart}
          addProductToFavourites={addProductToFavourites}
          removeProductFromFavourites={removeProductFromFavourites}
          favItems={favItems}
          productName={itemDetail[0]}
          quantity = {quantity}
          setQuantity = {setQuantity}
        />
      </div>
    </div>
  );
};

export default PantryItemCard;
