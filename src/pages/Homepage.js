import "../styles/index.css";
import Categories from "../components/Categories";
import PantryDisplay from "../components/PantryDisplay";
import { useState } from "react";

const Homepage = () => {
  const [currCategory, setCurrCategory] = useState("fruits");
  const [pantrySelection, setPantrySelection] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  
  return (
    
    <div className="homepage">
      <Categories
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
        setIsSearching = {setIsSearching}
      />
      <PantryDisplay
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
        pantrySelection = {pantrySelection}
        setPantrySelection = {setPantrySelection}
        isSearching = {isSearching}
        setIsSearching = {setIsSearching}
      />
    </div>
  );
};

export default Homepage;
