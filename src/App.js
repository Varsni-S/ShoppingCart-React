import React, { useEffect } from "react";
import Cart from "./components/CartPage/Cart";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Product from "./components/ProductPage/Product";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <NavbarContainer/>
        <Routes>
          <Route exact path="/" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
