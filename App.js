import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';

import productReducer from "./store/reducer/product";
import ShopNavigator from "./navigation/ShopNavigator";
import cartReducer from "./store/reducer/cart";
import orderReducer from "./store/reducer/orders";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

console.disableYellowBox = true;
