import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filtered: [],
};

export const filterCards = createAsyncThunk(
    'filter',
    async ([selectedFilter, cards], { dispatch }) => {
      try {
        if (selectedFilter === "Show All") {
            return cards;
        }
    
        return cards.filter(item => item.filter === selectedFilter);
      } catch (error) {
          throw new Error(error);
      }
    }
  );

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  extraReducers: {
    [ filterCards.pending]: (state) => {
      state.isLoading = true;
    },
    [ filterCards.fulfilled]: (state, action) => {
      state.filtered = action.payload;
      state.isLoading = false;
  },
    [ filterCards.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default filterSlice.reducer;
