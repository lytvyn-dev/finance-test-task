import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickers: [],
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    uploadTickers: (state, actions) => {
      state.tickers = actions.payload;
    },
  },
});

export const tickersActions = tickersSlice.actions;
export const tickersReducer = tickersSlice.reducer;
