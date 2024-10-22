import { createSlice } from '@reduxjs/toolkit';

const initialState = { view: 'list' };

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeView(state, action) {
      state.view = action.payload;
    },
  },
});
