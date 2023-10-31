import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quotes: [],
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    uploadQuoted: (state, actions) => {
      state.quotes = actions.payload;
    },
  },
});

export const quotesActions = quotesSlice.actions;
export const quotesReducer = quotesSlice.reducer;
