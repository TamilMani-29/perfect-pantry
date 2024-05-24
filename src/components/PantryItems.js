import React from "react";
import PantryItemCard from "./PantryItemCard";
import data from "../assets/data/pantryStock.json";
import { useEffect, useState } from "react";

const PantryItems = ({ currCategory, setCurrCategory }) => {
  console.log(currCategory);
  const weatherData = data;
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];
  const storedFavItems = JSON.parse(localStorage.getItem("favItems")) !== null ? JSON.parse(localStorage.getItem("favItems")) : [];
  const [cartItems, setCartItems] = useState(
    storedCartItems
  );

  const [favItems, setFavItems] = useState(
    storedFavItems
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.localStorage.setItem("favItems", JSON.stringify(favItems));
    console.log("cart items in pantry items", cartItems);
  }, [cartItems, favItems]);

  return (
    <div className="pantry-items">
      <div id="pantry-items-carousel" className="pantry-items-carousel">
        {weatherData[currCategory].map((fruit) => (
          <PantryItemCard
            key={currCategory + Date.now() + Math.random() * 10}
            itemDetails={fruit}
            currCategory={currCategory}
            cartItems={cartItems}
            setCartItems={setCartItems}
            favItems = {favItems}
            setFavItems = {setFavItems}
            quantity = {quantity}
            setQuantity = {setQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default PantryItems;
