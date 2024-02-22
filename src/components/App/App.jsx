import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Pizzas from "./Pizzas";
import CustomerInfo from "./CustomerInfo";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => {
    if (state.cart.length > 0) {
      return state.cart.reduce((ac, cv) => ac + Number(cv.price), 0);
    }
    return 0;
  });
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <p>{total}</p>
        </header>

        {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}

        <Route exact path='/'>
          <Pizzas />
        </Route>
        <Route exact path='/customerInfo'>
          <CustomerInfo />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
