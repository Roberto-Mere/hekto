import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const newId = action.payload;
      const idIndex = state.favorites.indexOf(newId);

      if (idIndex > -1) state.favorites.splice(idIndex, 1);
      else state.favorites.push(newId);
    },
  },
});
