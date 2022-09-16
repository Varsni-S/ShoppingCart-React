import React from "react";
import Cart from "./components/CartPage/Cart";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Product from "./components/ProductPage/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
