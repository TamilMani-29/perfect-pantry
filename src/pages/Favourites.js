import React from "react";
import "../styles/favourites.css";
import AppDetails from "../components/AppDetails";
import HomeButton from "../components/HomeButton";
import CartBar from "../components/CartBar";
import data from "../assets/data/pantryStock.json";
import { useState } from "react";
import PantryItemCard from "../components/PantryItemCard";
import EmptyCart from "../components/EmptyCart";

const Favourites = () => {
  const storedCartItems =
    JSON.parse(localStorage.getItem("cartItems")) !== null
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  const storedFavItems =
    JSON.parse(localStorage.getItem("favItems")) !== null
      ? JSON.parse(localStorage.getItem("favItems"))
      : [];
  const [favItems, setFavItems] = useState(storedFavItems);
  const [cartItems, setCartItems] = useState(storedCartItems);
  let favItemsObj = [];
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  let reducedFav = favItems.filter(onlyUnique);
  for (let i = 0; i < reducedFav.length; i++) {
    for (let key in data) {
      for (let j = 0; j < data[key].length; j++) {
        if (
          data[key][j].name === reducedFav[i] 
        ) {
          favItemsObj.push([data[key][j], key]);
        }
      }
    }
  }
  return (
    <div className="homepage">
      <div className="left-options">
        <AppDetails />
        <HomeButton />
      </div>
      <div className="display-container">
        <div className="options-tab">
          <div className="favourites-title">Your Favourites</div>
          <CartBar />
        </div>
        {favItems.length === 0 && <EmptyCart option="Favourites" />}
        {favItems.length > 0 && <div className="favourite-items">
          <div className="pantry-items">
            <div className="favourite-items-carousel">
              {favItemsObj.map((item) => (
                <PantryItemCard
                  key={Date.now() + item[0] + Math.random(0) * 10}
                  itemDetails={item[0]}
                  currCategory={item[1]}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  favItems={favItems}
                  setFavItems={setFavItems}
                />
              ))}
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Favourites;
