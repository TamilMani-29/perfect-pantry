import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/favourites" element={<Favourites/>}></Route>
    </Routes>
  );
}

export default App;
