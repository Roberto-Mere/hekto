import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './products';

const store = configureStore({ reducer: { products: productsSlice.reducer } });

export const productsActions = productsSlice.actions;

export default store;
