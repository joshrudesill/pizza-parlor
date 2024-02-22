import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const pizzas = (state = [], action) => {
  if(action.type === 'REFRESH_PIZZAS') {
    return action.payload;
  }
  return state;
}

const cart = (state = [], action) => {
  if(action.type === 'ADD_TO_CART') {
    console.log(`pizza added to cart: ${action.payload}`);
    return [...state, action.payload];
  }
  if(action.type === 'CLEAR_CART') {
    return state = [];
  }
  return state;
}

const customerInfo = (state = [], action) => {
  if(action.type === 'ADD_CUSTOMER') {
    console.log(`customer info added: ${action.payload}`);
    return [...state, action.payload];
  }
  if(action.type === 'CLEAR_CUSTOMER') {
    return state = [];
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzas,
    cart,
    customerInfo 
  }),
  applyMiddleware(logger),
);


export default store;
