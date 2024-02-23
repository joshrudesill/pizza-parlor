import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";
import Pizzas from "./Pizzas";
import CustomerInfo from "./CustomerInfo";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import Admin from "./Admin";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => {
    if (state.cart.length > 0) {
      return state.cart.reduce((ac, cv) => ac + Number(cv.price), 0);
    }
    return 0;
  });
  const goBack = () => {
    history.goBack()
  }
  return (
   
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <p className='total'>🛒 Total: ${total}</p>
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
        <button className='Back-button' onClick={goBack}>👈 BACK</button>
        <Route exact path='/'>
          <Link to='/customerInfo'>
            <button className='Next-button'>NEXT 👉</button>
          </Link>
        </Route>

        <Route exact path='/customerInfo'>
          <Link to="/checkout">
            <button className="Next-button">NEXT 👉</button>
          </Link>
        </Route>
        
<Route exact path='/admin'>
  <Admin />
</Route>
      </div>
    
  );
}

export default App;
