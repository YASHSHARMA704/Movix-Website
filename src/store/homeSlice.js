import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
  name: 'home',
  initialState : {
    url : {},
    genres: {}      // genres are categories.
  },
  reducers: {

    // here state represent it's initial state.
    getApiConfiguration : (state , action) => {
        state.url = action.payload;
    },
    getGenres : (state , action) => {
        state.genres = action.payload;
    }
  },
})


export const { getApiConfiguration , getGenres } = homeSlice.actions;

export default homeSlice.reducer;