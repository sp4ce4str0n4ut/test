import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api/filters';

const initialState = {
  filters: [],
  isLoading: false,
};

export const fetchFiltersData = createAsyncThunk(
  'filters',
  async (_, { dispatch }) => {
    try {
      const { data } = await api.fetchFilters();

      return data;
    } catch (error) {
        throw new Error(error);
    }
  }
);

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  extraReducers: {
    [ fetchFiltersData.pending]: (state) => {
      state.isLoading = true;
    },
    [ fetchFiltersData.fulfilled]: (state, action) => {
      state.filters = action.payload;
      state.isLoading = false;
    },
    [ fetchFiltersData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default filtersSlice.reducer;
