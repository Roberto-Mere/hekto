import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) existingItem.quantity += 1;
      else
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (existingItem.quantity > 1) existingItem.quantity -= 1;
      else
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});
