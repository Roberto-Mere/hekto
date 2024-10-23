import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: {
    perPage: 6,
    sortBy: 'desc',
    view: 'list',
  },
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
    changePerPage(state, action) {
      state.sort.perPage = action.payload;
    },
    changeSortBy(state, action) {
      state.sort.sortBy = action.payload;
    },
    changeView(state, action) {
      state.sort.view = action.payload;
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
