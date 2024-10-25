import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './products';
import { cartSlice } from './cart';
import { favoritesSlice } from './favorites';

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    fav: favoritesSlice.reducer,
  },
});

export const productsActions = productsSlice.actions;
export const cartActions = cartSlice.actions;
export const favoritesActions = favoritesSlice.actions;

export default store;
