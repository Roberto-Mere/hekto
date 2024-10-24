import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      image: '/products/watches.jpeg',
      name: 'Watches',
      price: 10,
      quantity: 4,
    },
    {
      id: 2,
      image: '/products/laptop.png',
      name: 'Laptop',
      price: 10,
      quantity: 4,
    },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) existingItem.quantity += 1;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (existingItem.quantity > 1) existingItem.quantity -= 1;
      else
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
