import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  view: 'list',
  filters: {
    brand: [],
    discount: [],
    rating: [],
    category: [],
    price: [],
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeView(state, action) {
      state.view = action.payload;
    },
    toggleFilter(state, action) {
      const type = action.payload.type;
      const id = action.payload.id;
      const filterIndex = state.filters[type].indexOf(id);

      if (filterIndex > -1) {
        state.filters[type].splice(filterIndex, 1);
      } else {
        state.filters[type].push(id);
      }
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
});
