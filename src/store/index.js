import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './products';
import { cartSlice } from './cart';

const store = configureStore({
  reducer: { products: productsSlice.reducer, cart: cartSlice.reducer },
});

export const productsActions = productsSlice.actions;
export const cartActions = cartSlice.actions;

export default store;
