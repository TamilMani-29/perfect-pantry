import React from 'react'
import favouritImg from '../assets/general-images/favouritelogo.png'

const FavouritesBar = () => {
  return (
    <div className="favourites">
      <a href="/favourites">
        <img
          id="favo-img"
          className="favo-img"
          src={favouritImg}
          alt="favourite-option"
        />
      </a>
    </div>
  );
}

export default FavouritesBar