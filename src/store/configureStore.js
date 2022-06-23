import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters';
import cardsReducer from './cards';
import filterReducer from './filter';

const store = configureStore({
  reducer: {
      filters: filtersReducer,
      cards: cardsReducer,
      filter: filterReducer,
  },
});

export default store;
