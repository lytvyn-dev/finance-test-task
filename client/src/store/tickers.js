import { createSlice } from '@reduxjs/toolkit';
import { socket } from '../constants/server';

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

export const connectSocket = () => {
  return async dispatch => {
    socket.on('ticker', response => {
      const res = Array.isArray(response) ? response : [response];
      dispatch({ type: 'tickers/uploadTickers', payload: res });
    });
  };
};
