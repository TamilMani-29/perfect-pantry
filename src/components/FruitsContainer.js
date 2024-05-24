import React from 'react'
import PantryItems from './PantryItems';
const FruitsContainer = ({currCategory, setCurrCategory}) => {
  return (
    <div className="fruits-container">
      <div className="pantry-items-heading">{currCategory}</div>
      <PantryItems currCategory = {currCategory} setCurrCategory = {setCurrCategory}/>
    </div>
  );
}

export default FruitsContainer