import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import productsSliceReducer from "./features/products/productsSlice"

const store = configureStore({
 reducer: {
 productsStore: productsSliceReducer,
 },
});

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyle />
    </React.StrictMode>,
  document.getElementById('root')
);

