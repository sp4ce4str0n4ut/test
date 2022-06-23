import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api/cards';

const initialState = {
  cards: [],
  isLoading: false,
};

export const fetchCardsData = createAsyncThunk(
  'cards',
  async (page, { dispatch }) => {
    try {
      const CARDS_PER_PAGE = 9;
      const { data } = await api.fetchCards(page, CARDS_PER_PAGE);

      return data;
    } catch (error) {
        throw new Error(error);
    }
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  extraReducers: {
    [ fetchCardsData.pending]: (state) => {
      state.isLoading = true;
    },
    [ fetchCardsData.fulfilled]: (state, action) => {
      state.cards = [...state.cards, ...action.payload];
      state.isLoading = false;
  },
    [ fetchCardsData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default cardsSlice.reducer;
