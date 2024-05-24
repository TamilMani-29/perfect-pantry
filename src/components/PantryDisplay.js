
import SearchBar from "./SearchBar";
import FavouritesBar from "./FavouritesBar";
import CartBar from "./CartBar";
import FruitsContainer from "./FruitsContainer";
import data from "../assets/data/pantryStock.json";
import SearchResult from "./SearchResult";
import SorryContainer from "./SorryContainer";

const PantryDisplay = ({
  currCategory,
  setCurrCategory,
  pantrySelection,
  setPantrySelection,
  isSearching,
  setIsSearching,
}) => {
  const pantryStock = [];
  let searchResultArr = [];

  for (let key in data) {
    for (let i = 0; i < data[key].length; i++) {
      pantryStock.push(data[key][i].name);
    }
  }

  for (let key in data) {
    for (let i = 0; i < data[key].length; i++) {
      if (
        data[key][i].name.includes(pantrySelection) &&
        pantrySelection.length >= 1
      ) {
        console.log(pantrySelection);
        searchResultArr.push([data[key][i], key]);
      }
    }
  }
  return (
    <div className="display-container">
      <div className="options-tab-home">
        <SearchBar
          pantrySelection={pantrySelection}
          setPantrySelection={setPantrySelection}
          pantryStock={pantryStock}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
        <FavouritesBar />
        <CartBar />
      </div>
      <div className="pantry-container">
        {!isSearching && (
          <FruitsContainer
            currCategory={currCategory}
            setCurrCategory={setCurrCategory}
          />
        )}
        {isSearching && searchResultArr.length > 0 && (
          <SearchResult
            pantrySelection={pantrySelection}
            setPantrySelection={setPantrySelection}
            searchResultArr={searchResultArr}
          />
        )}
        {isSearching && searchResultArr.length === 0 && <SorryContainer/>}

      </div>
    </div>
  );
};

export default PantryDisplay;
