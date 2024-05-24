import searchIcon from '../assets/general-images/search.png'

const SearchBar = ({pantrySelection, setPantrySelection, pantryStock, isSearching, setIsSearching}) => {
  function updateSearch(e){
    setPantrySelection(e.target.value);
    setIsSearching(true);
  }
  
  return (
    <div className="search-bar">
      <input
        id="search-input"
        list="search-dropdown"
        className="search-input"
        type="text"
        name="search-bar"
        placeholder="Search here"
        value={pantrySelection}
        onInput={(e)=> updateSearch(e)}
      />
      <datalist id="search-dropdown">
        {pantryStock.map((item) => <option key={item}>{item}</option>)}
      </datalist>
      <img
        id="search-icon"
        className="search-icon"
        src={searchIcon} alt="search-icon"
      />
    </div>
  );
};

export default SearchBar;
