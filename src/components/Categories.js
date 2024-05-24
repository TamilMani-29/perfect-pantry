import AppDetails from "./AppDetails";

const Categories = ({ currCategory, setCurrCategory, setIsSearching}) => {
  function updateCategory(category) {
    setCurrCategory(category);
    setIsSearching(false);
  }
  return (
    <div className="categories-home">
      <AppDetails />
      <div className="category-title-home">Categories</div>
      <div
        style={{ backgroundColor: currCategory === "fruits" ? "#6ed7d3" : "" }}
        className="category-fruits"
        onClick={() => updateCategory("fruits")}
      >
        Fruits
      </div>
      <div
        style={{
          backgroundColor: currCategory === "vegetables" ? "#6ed7d3" : "",
        }}
        className="category-vegetables"
        onClick={() => updateCategory("vegetables")}
      >
        Vegetables
      </div>
      <div data-testid = "pasteries"
        style={{
          backgroundColor: currCategory === "pasteries" ? "#6ed7d3" : "",
        }}
        className="category-pasteries"
        onClick={() => updateCategory("pasteries")}
      >
        Pasteries
      </div>
      <div
        style={{
          backgroundColor: currCategory === "beverages" ? "#6ed7d3" : "",
        }}
        className="category-beverages"
        onClick={() => updateCategory("beverages")}
      >
        Beverages
      </div>
      <div
        style={{ backgroundColor: currCategory === "dairy" ? "#6ed7d3" : "" }}
        className="category-dairy"
        onClick={() => updateCategory("dairy")}
      >
        Dairy
      </div>
      <div
        style={{ backgroundColor: currCategory === "snacks" ? "#6ed7d3" : "" }}
        className="category-snacks"
        onClick={() => updateCategory("snacks")}
      >
        Snacks
      </div>
    </div>
  );
};

export default Categories;
